import type { Metadata } from "next";
import { isAdmin } from "@/lib/auth";
import { hasDb } from "@/lib/db";
import AdminPanel from "@/components/admin/AdminPanel";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = { title: "Admin", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const authed = await isAdmin();
  return (
    <main className="pt-40 px-3 md:px-16 lg:px-20 xl:px-28 pb-24 min-h-[80vh]">
      {authed ? <AdminPanel dbReady={hasDb()} /> : <LoginForm configured={Boolean(process.env.ADMIN_PASSWORD)} />}
    </main>
  );
}
