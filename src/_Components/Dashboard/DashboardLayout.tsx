import Sidebar from "./Sidebar";
import type { ReactNode } from "react";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen w-full bg-sidebar-foreground overflow-hidden p-6 gap-6">
      {/* Sidebar */}
      <aside className="w-60 shrink-0">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Header (optional later) */}
        {/* <DashboardHeader /> */}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 border border-primary bg-foreground rounded-2xl scroll-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
