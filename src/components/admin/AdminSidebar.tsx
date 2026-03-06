"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  Package,
  Building2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/kategoriler", label: "Kategoriler", icon: FolderOpen },
  { href: "/admin/urunler", label: "Ürünler", icon: Package },
  { href: "/admin/projeler", label: "Projeler", icon: Building2 },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  }

  const nav = (
    <nav className="flex flex-col gap-1 flex-1">
      {links.map((l) => {
        const active = pathname.startsWith(l.href);
        return (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-4 py-2.5 rounded text-sm font-medium transition-colors ${
              active
                ? "bg-accent text-white"
                : "text-gray-300 hover:bg-white/10"
            }`}
          >
            <l.icon size={18} />
            {l.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white flex flex-col transition-transform lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-5 border-b border-white/10">
          <Link href="/admin/dashboard" className="text-lg font-bold">
            YapıTek <span className="text-accent text-sm font-normal">Admin</span>
          </Link>
        </div>

        <div className="flex-1 px-3 py-4">{nav}</div>

        <div className="px-3 pb-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2.5 rounded text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-colors w-full"
          >
            <LogOut size={18} />
            Çıkış Yap
          </button>
        </div>
      </aside>
    </>
  );
}
