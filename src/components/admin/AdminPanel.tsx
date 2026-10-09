"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Kind } from "@/lib/defaults";

type Item = { id: number } & Record<string, string | number>;

const TABS: { kind: Kind; label: string; fields: { key: string; label: string; long?: boolean }[] }[] = [
  {
    kind: "experience",
    label: "Experience",
    fields: [
      { key: "date", label: "Period (e.g. Jun 2023 - Present)" },
      { key: "title", label: "Job title" },
      { key: "company", label: "Company" },
    ],
  },
  {
    kind: "education",
    label: "Education",
    fields: [
      { key: "title", label: "Degree" },
      { key: "place", label: "School / University" },
      { key: "period", label: "Period (e.g. Nov 2020 - Jun 2023)" },
    ],
  },
  {
    kind: "achievement",
    label: "Achievements",
    fields: [
      { key: "date", label: "Year" },
      { key: "title", label: "Title" },
      { key: "description", label: "Short description", long: true },
    ],
  },
];

const input = "w-full border border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:border-black";
const btn = "border border-gray-200 hover:bg-black hover:text-white rounded-full px-5 py-1.5 text-sm font-medium disabled:opacity-40";

export default function AdminPanel({ dbReady }: { dbReady: boolean }) {
  const router = useRouter();
  const [tab, setTab] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Item | null>(null); // id 0 = new
  const [msg, setMsg] = useState("");
  const { kind, fields } = TABS[tab];

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/${kind}`);
    if (res.status === 401) return router.refresh();
    setItems(res.ok ? await res.json() : []);
    setLoading(false);
  }, [kind, router]);

  useEffect(() => {
    setEditing(null);
    setMsg("");
    if (dbReady) load();
    else setLoading(false);
  }, [load, dbReady]);

  async function call(method: string, body: object) {
    setMsg("");
    const res = await fetch(`/api/admin/${kind}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      setMsg((await res.json().catch(() => ({}))).error || "Something went wrong");
      return false;
    }
    await load();
    return true;
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!editing) return;
    const ok = editing.id ? await call("PUT", editing) : await call("POST", editing);
    if (ok) setEditing(null);
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="h-1.5 w-1.5 bg-black rounded-full"></div>
          <span className="uppercase font-medium text-sm sm:text-base">Admin</span>
        </div>
        <button onClick={logout} className={btn}>Log out</button>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold mt-8">Manage portfolio content</h1>

      {!dbReady && (
        <p className="mt-6 text-sm text-red-600">
          DATABASE_URL is not configured, so the site is showing built-in content and edits are disabled.
        </p>
      )}

      <div className="flex flex-wrap gap-3 mt-10">
        {TABS.map((t, i) => (
          <button
            key={t.kind}
            onClick={() => setTab(i)}
            className={`rounded-full px-6 py-2 font-medium border ${i === tab ? "bg-black text-white border-black" : "border-gray-200 hover:bg-black hover:text-white"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button disabled={!dbReady} className={btn} onClick={() => setEditing({ id: 0 })}>+ Add new</button>
        <span className="text-xs text-[#696969]">New items appear first. Use the arrows to reorder.</span>
      </div>
      {msg && <p className="mt-3 text-sm text-red-600">{msg}</p>}

      {editing && (
        <form onSubmit={save} className="mt-6 border border-gray-200 rounded-xl p-5 grid gap-4">
          <h2 className="font-semibold">{editing.id ? "Edit" : "New"} {TABS[tab].label.toLowerCase()}</h2>
          {fields.map((f) => (
            <label key={f.key} className="grid gap-1 text-sm text-[#696969] font-medium">
              {f.label}
              {f.long ? (
                <textarea
                  rows={3}
                  className={input}
                  value={String(editing[f.key] ?? "")}
                  onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}
                />
              ) : (
                <input
                  className={input}
                  value={String(editing[f.key] ?? "")}
                  onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })}
                />
              )}
            </label>
          ))}
          <div className="flex gap-3">
            <button className="bg-black text-white rounded-full px-8 py-2 font-medium">Save</button>
            <button type="button" onClick={() => setEditing(null)} className={btn}>Cancel</button>
          </div>
        </form>
      )}

      <ul className="mt-8">
        {loading && <li className="text-[#696969] py-4">Loading...</li>}
        {!loading && dbReady && items.length === 0 && <li className="text-[#696969] py-4">Nothing here yet.</li>}
        {items.map((it, i) => (
          <li key={it.id} className="border-t border-gray-200 py-4 flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
            <div>
              <div className="font-medium">{String(it.title)}</div>
              <div className="text-sm text-[#696969]">
                {fields.filter((f) => f.key !== "title").map((f) => String(it[f.key])).filter(Boolean).join(" | ")}
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className={btn} disabled={i === 0} onClick={() => call("PATCH", { id: it.id, dir: -1 })} aria-label="Move up">↑</button>
              <button className={btn} disabled={i === items.length - 1} onClick={() => call("PATCH", { id: it.id, dir: 1 })} aria-label="Move down">↓</button>
              <button className={btn} onClick={() => setEditing(it)}>Edit</button>
              <button
                className={btn}
                onClick={() => confirm(`Delete "${it.title}"?`) && call("DELETE", { id: it.id })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
