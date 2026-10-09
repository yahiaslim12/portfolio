import { neon } from "@neondatabase/serverless";
import {
  defaultAchievements, defaultEducation, defaultExperience,
  type Achievement, type Education, type Experience, type Kind,
} from "./defaults";

// Whitelisted tables/columns: the only identifiers ever interpolated into SQL.
export const KINDS: Record<Kind, { table: string; fields: string[] }> = {
  experience: { table: "experiences", fields: ["date", "title", "company"] },
  education: { table: "education", fields: ["title", "place", "period"] },
  achievement: { table: "achievements", fields: ["date", "title", "description"] },
};

const withId = <T,>(rows: Omit<T, "id">[]) => rows.map((r, i) => ({ ...r, id: -(i + 1) })) as T[];

export const hasDb = () => Boolean(process.env.DATABASE_URL);

let ready: Promise<void> | null = null;

function client() {
  return neon(process.env.DATABASE_URL as string);
}

const insertSql = (kind: Kind) => {
  const { table, fields } = KINDS[kind];
  const params = fields.map((_, j) => `$${j + 1}`).join(", ");
  return `INSERT INTO ${table} (${fields.join(", ")}, sort_order) VALUES (${params}, $${fields.length + 1})`;
};

// Creates tables and seeds them with the original content on first run.
function ensureSchema() {
  if (!ready) {
    ready = (async () => {
      const sql = client();
      const seeds: Record<Kind, Record<string, string>[]> = {
        experience: defaultExperience,
        education: defaultEducation,
        achievement: defaultAchievements,
      };
      for (const kind of Object.keys(KINDS) as Kind[]) {
        const { table, fields } = KINDS[kind];
        const cols = fields.map((f) => `${f} TEXT NOT NULL DEFAULT ''`).join(", ");
        await sql.query(
          `CREATE TABLE IF NOT EXISTS ${table} (id SERIAL PRIMARY KEY, ${cols}, sort_order INTEGER NOT NULL DEFAULT 0)`
        );
        const [{ n }] = await sql.query(`SELECT COUNT(*)::int AS n FROM ${table}`);
        if (n === 0) {
          for (let i = 0; i < seeds[kind].length; i++) {
            await sql.query(insertSql(kind), [...fields.map((f) => seeds[kind][i][f]), i]);
          }
        }
      }
    })().catch((e) => {
      ready = null;
      throw e;
    });
  }
  return ready;
}

async function list<T>(kind: Kind, fallback: Omit<T, "id">[]): Promise<T[]> {
  if (!hasDb()) return withId<T>(fallback);
  try {
    await ensureSchema();
    const { table, fields } = KINDS[kind];
    return (await client().query(
      `SELECT id, ${fields.join(", ")} FROM ${table} ORDER BY sort_order ASC, id ASC`
    )) as T[];
  } catch (e) {
    console.error(`DB read failed for ${kind}, using defaults`, e);
    return withId<T>(fallback);
  }
}

export const getExperience = () => list<Experience>("experience", defaultExperience);
export const getEducation = () => list<Education>("education", defaultEducation);
export const getAchievements = () => list<Achievement>("achievement", defaultAchievements);

export const getAll = (kind: Kind) =>
  ({ experience: getExperience, education: getEducation, achievement: getAchievements })[kind]();

export async function createItem(kind: Kind, data: Record<string, string>) {
  await ensureSchema();
  const { table, fields } = KINDS[kind];
  const sql = client();
  // New items go on top (lowest sort_order).
  const [{ m }] = await sql.query(`SELECT COALESCE(MIN(sort_order), 0)::int AS m FROM ${table}`);
  await sql.query(insertSql(kind), [...fields.map((f) => data[f]), m - 1]);
}

export async function updateItem(kind: Kind, id: number, data: Record<string, string>) {
  await ensureSchema();
  const { table, fields } = KINDS[kind];
  await client().query(
    `UPDATE ${table} SET ${fields.map((f, j) => `${f} = $${j + 1}`).join(", ")} WHERE id = $${fields.length + 1}`,
    [...fields.map((f) => data[f]), id]
  );
}

export async function deleteItem(kind: Kind, id: number) {
  await ensureSchema();
  await client().query(`DELETE FROM ${KINDS[kind].table} WHERE id = $1`, [id]);
}

// Swap position with the neighbour above (-1) or below (+1).
export async function moveItem(kind: Kind, id: number, dir: -1 | 1) {
  await ensureSchema();
  const { table } = KINDS[kind];
  const sql = client();
  const rows = (await sql.query(`SELECT id FROM ${table} ORDER BY sort_order ASC, id ASC`)) as { id: number }[];
  const i = rows.findIndex((r) => r.id === id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= rows.length) return;
  [rows[i], rows[j]] = [rows[j], rows[i]];
  // Renumber so ties can't make the swap a no-op.
  await Promise.all(rows.map((r, idx) => sql.query(`UPDATE ${table} SET sort_order = $1 WHERE id = $2`, [idx, r.id])));
}
