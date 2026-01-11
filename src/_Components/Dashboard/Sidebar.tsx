import { Menu, X } from "lucide-react";
import { useState } from "react";
import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  // Helper function to close mobile sidebar
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Desktop sidebar (lg+) - always visible */}
      <aside className="hidden lg:block h-screen sticky top-0">
        <SidebarContent />
      </aside>

      {/* Mobile top bar (below lg) */}
      <header className="lg:hidden flex items-center gap-3 px-4 h-14 bg-sidebar-foreground shadow-sm">
        <button 
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="text-muted w-6 h-6" />
        </button>
        <span className="text-lg font-semibold text-muted">Dashboard</span>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay - click to close */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeSidebar}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div 
            className={`
              relative z-10 flex flex-col h-full w-64 
              bg-sidebar-foreground shadow-2xl 
              transform transition-transform duration-300 ease-in-out
              ${open ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            {/* Header with close button */}
            <div className="flex justify-end p-4 border-b border-border/30">
              <button 
                onClick={closeSidebar}
                aria-label="Close menu"
              >
                <X className="text-muted w-6 h-6" />
              </button>
            </div>

            {/* Sidebar content - pass close function */}
            <SidebarContent onNavigate={closeSidebar}/>
          </div>
        </div>
      )}
    </>
  );
}