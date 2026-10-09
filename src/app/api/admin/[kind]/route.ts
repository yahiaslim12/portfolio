import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdmin } from "@/lib/auth";
import { KINDS, createItem, deleteItem, getAll, hasDb, moveItem, updateItem } from "@/lib/db";
import type { Kind } from "@/lib/defaults";

type Ctx = { params: Promise<{ kind: string }> };

async function guard(ctx: Ctx) {
  const { kind } = await ctx.params;
  if (!(await isAdmin())) return { error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }) };
  if (!(kind in KINDS)) return { error: NextResponse.json({ error: "Unknown type" }, { status: 404 }) };
  if (!hasDb()) return { error: NextResponse.json({ error: "DATABASE_URL is not configured" }, { status: 503 }) };
  return { kind: kind as Kind };
}

function clean(kind: Kind, body: Record<string, unknown>) {
  const out: Record<string, string> = {};
  for (const f of KINDS[kind].fields) {
    const v = body[f];
    out[f] = typeof v === "string" ? v.trim().slice(0, 500) : "";
  }
  return out;
}

const done = () => {
  revalidatePath("/");
  return NextResponse.json({ ok: true });
};

export async function GET(_: NextRequest, ctx: Ctx) {
  const g = await guard(ctx);
  if (g.error) return g.error;
  return NextResponse.json(await getAll(g.kind));
}

export async function POST(req: NextRequest, ctx: Ctx) {
  const g = await guard(ctx);
  if (g.error) return g.error;
  const data = clean(g.kind, await req.json());
  if (!data.title) return NextResponse.json({ error: "Title is required" }, { status: 400 });
  await createItem(g.kind, data);
  return done();
}

export async function PUT(req: NextRequest, ctx: Ctx) {
  const g = await guard(ctx);
  if (g.error) return g.error;
  const body = await req.json();
  const id = Number(body.id);
  const data = clean(g.kind, body);
  if (!Number.isInteger(id) || !data.title) return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  await updateItem(g.kind, id, data);
  return done();
}

export async function PATCH(req: NextRequest, ctx: Ctx) {
  const g = await guard(ctx);
  if (g.error) return g.error;
  const { id, dir } = await req.json();
  if (!Number.isInteger(id) || (dir !== -1 && dir !== 1)) return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  await moveItem(g.kind, id, dir);
  return done();
}

export async function DELETE(req: NextRequest, ctx: Ctx) {
  const g = await guard(ctx);
  if (g.error) return g.error;
  const id = Number((await req.json()).id);
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  await deleteItem(g.kind, id);
  return done();
}
