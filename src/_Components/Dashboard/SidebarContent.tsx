import { Home, Calendar, Settings, User, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "@/images/dashboardLogo.png";
import { toast } from "sonner";

import { useAppDispatch } from "@/app/hooks";
import { clearAuth } from "@/features/auth/authSlice";
import { useLogoutMutation } from "@/features/auth/authAPI";
import { useGetUserProfileQuery } from "@/features/user/userAPI"; // <-- import query
import userIcon from "@/images/dashboardimage.svg"; // fallback image

export default function SidebarContent() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading }] = useLogoutMutation();

  // Fetch user profile
  const { data: user, isLoading: loadingUser, isError } = useGetUserProfileQuery();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearAuth());
      toast.success("Logged out successfully");
      navigate("/");
    } catch (err: any) {
      toast.error(err?.data?.message || "Logout failed");
    }
  };

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `
    w-full flex items-center gap-3 rounded-[10px] px-4 py-3 text-sm font-medium
    transition-colors duration-200 ease-in-out
    ${isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"}
  `;

  return (
    <div className="w-64 h-full bg-sidebar-foreground text-muted flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </div>
          <span className="text-xl font-semibold">Demo Logo</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="mx-4 mb-6">
        <div
          className="rounded-xl p-3 flex items-center gap-3"
          style={{
            background:
              "linear-gradient(97deg, #000 15.89%, #D4BB8C 69.34%, #FFF 103.4%)",
          }}
        >
          {/* User Image */}
          <img
            src={user?.image || userIcon}
            alt={user?.first_name || "User"}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            {/* User Name */}
            <div className="text-muted text-xl font-semibold">
              {loadingUser ? "Loading..." : isError ? "Unknown User" : `${user?.first_name} ${user?.last_name}`}
            </div>
            {/* User Location / Address */}
            <div className="text-muted text-sm">
              {user?.address || "Unknown Location"}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <div className="space-y-1 px-4">
          <NavLink to="/dashboard" end className={navItemClass}>
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/dashboard/bookings" className={navItemClass}>
            <Calendar size={20} />
            <span>My Bookings</span>
          </NavLink>

          <NavLink to="/dashboard/maintenance" className={navItemClass}>
            <Settings size={20} />
            <span>Maintenance</span>
          </NavLink>

          <NavLink to="/dashboard/profile" className={navItemClass}>
            <User size={20} />
            <span>Profile</span>
          </NavLink>
        </div>
      </nav>

      {/* Logout */}
      <div className="mt-auto p-4">
        <button
          onClick={handleLogout}
          disabled={isLoading}
          className="w-full text-muted hover:bg-foreground rounded-xl px-4 py-3 flex items-center gap-3"
        >
          <LogOut size={20} />
          <span>{isLoading ? "Logging out..." : "Log Out"}</span>
        </button>
      </div>
    </div>
  );
}
