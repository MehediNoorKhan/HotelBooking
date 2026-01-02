import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-sidebar-foreground overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden lg:block w-60 shrink-0">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="relative flex flex-1 flex-col w-full">
        <main
          className="
            flex-1
            overflow-y-auto
            bg-foreground
            border border-primary
            rounded-none lg:rounded-2xl
            lg:m-6
            p-4 sm:p-6 lg:p-8
            pt-18 lg:pt-8
            md:pt-20
          "
        >
          <Outlet /> {/* 👈 THIS IS THE KEY */}
        </main>

        {/* Mobile sidebar overlay */}
        <div className="lg:hidden absolute inset-0 pointer-events-none">
          <div className="pointer-events-auto">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
