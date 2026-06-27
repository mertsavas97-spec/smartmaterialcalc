import { redirect } from "next/navigation";
import { getOptionalAdmin } from "@/lib/admin/auth";

export default async function AdminIndexPage() {
  const admin = await getOptionalAdmin();
  redirect(admin ? "/admin/guides" : "/admin/login");
}
