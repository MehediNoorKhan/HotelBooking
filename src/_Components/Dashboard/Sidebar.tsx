import { Menu, X } from "lucide-react";
import { useState } from "react";
import SidebarContent from "./SidebarContent";
;

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar (lg+) */}
      <aside className="hidden lg:block h-screen">
        <SidebarContent />
      </aside>

      {/* Mobile top bar (md and below) */}
      <header className="lg:hidden flex items-center gap-3 px-4 h-14 bg-sidebar-foreground shadow">
        <button onClick={() => setOpen(true)}>
          <Menu className="text-muted" />
        </button>
        <span className="text-lg font-semibold text-muted">Dashboard</span>
      </header>

      {/* Mobile drawer */}
     {open && (
  <div className="fixed inset-0 z-50 lg:hidden flex">
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setOpen(false)}
    />

    {/* Drawer */}
    <div className="relative z-10 flex flex-col h-full w-64 bg-sidebar-foreground shadow-xl overflow-y-auto">
      {/* Close button */}
      <div className="flex justify-end p-4">
        <button onClick={() => setOpen(false)}>
          <X className="text-muted" />
        </button>
      </div>

      {/* Sidebar content */}
      <SidebarContent />
    </div>
  </div>
)}
    </>
  );
}
