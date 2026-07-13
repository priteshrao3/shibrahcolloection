import type { Metadata } from "next";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminSidebarProvider } from "@/components/admin/AdminSidebarContext";
import { ToastHost } from "@/components/shop/Toast";

// Admin pages are authenticated, always show live/editable data, and must
// never be prerendered at build time (a static snapshot would go stale the
// moment an admin edits anything, and build-time prerendering also requires
// env vars/network access that aren't available in every build environment).
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | Shibrah Collection Admin" },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminSidebarProvider>
      <div className="flex min-h-screen bg-neutral-50">
        <AdminSidebar />
        <div className="min-w-0 flex-1">{children}</div>
        <ToastHost />
      </div>
    </AdminSidebarProvider>
  );
}
