import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export default function ProtectedRoute() { 
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  // Not logged in redirect
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // Logged in allow access
  return <Outlet />;
}