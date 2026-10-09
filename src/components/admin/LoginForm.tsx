"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({ configured }: { configured: boolean }) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setBusy(false);
    if (res.ok) router.refresh();
    else setError("Wrong password");
  }

  return (
    <form onSubmit={submit} className="max-w-md">
      <div className="flex gap-3 items-center">
        <div className="h-1.5 w-1.5 bg-black rounded-full"></div>
        <span className="uppercase font-medium text-sm sm:text-base">Admin</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold mt-8">Sign in</h1>
      {!configured && (
        <p className="mt-4 text-sm text-red-600">ADMIN_PASSWORD is not set on the server.</p>
      )}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
        className="mt-8 w-full border border-gray-200 rounded-full px-6 py-3 outline-none focus:border-black"
      />
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <button
        disabled={busy || !password}
        className="mt-6 font-medium border border-gray-200 hover:bg-black hover:text-white rounded-full px-8 py-2 disabled:opacity-50"
      >
        {busy ? "..." : "Enter"}
      </button>
    </form>
  );
}
