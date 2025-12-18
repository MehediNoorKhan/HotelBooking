import { Home, Calendar, Settings, User, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import userIcon from "@/images/dashboardimage.svg"
import Logo from "@/images/dashboardLogo.png"
import { useAppDispatch } from '@/app/hooks';
import { logoutUser } from '@/features/auth/authThunk';
import { toast } from 'sonner';

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

const handleLogout = async () => {
  const result = await dispatch(logoutUser());
  if (logoutUser.fulfilled.match(result)) {
    toast.success(result.payload.message || "Logged out successfully.");
    // Optional: redirect to login page
    navigate("/");
  } else {
    toast.error(result.payload as string || "Logout failed.");
  }
};

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `
  w-full flex items-center gap-3 rounded-[10px] px-4 py-3 text-sm font-medium
  transition-colors duration-200 ease-in-out
  ${
    isActive
      ? "bg-muted text-foreground"
      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
  }
  `;


  return (
    <div className="w-64 h-screen bg-sidebar-foreground text-muted flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <img src={Logo} alt="" />
          </div>
          <span className="text-xl font-semibold">Demo Logo</span>
        </div>
      </div>

      {/* User Profile */}
      <div className="mx-4 mb-6">
        <div className="rounded-xl p-3 flex items-center gap-3"
        style={{
    background: 'linear-gradient(97deg, #000 15.89%, #D4BB8C 69.34%, #FFF 103.4%)',
  }}>
          <img 
            src={userIcon} 
            alt="User" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="text-muted text-xl font-semibold">Alex Johnson</div>
            <div className="text-muted text-sm">New York, NY</div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
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


      {/* Log Out */}
      <div className="p-4">
        <button
        onClick={handleLogout}
        className="w-full text-muted hover:bg-foreground rounded-xl px-4 py-3 flex items-center gap-3 mb-3 ">
          <LogOut size={20} />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}