import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home";
import ApartmentDetails from "../../Pages/ApartmentDetails/ApartmentDetails";
import Apartments from "../../Pages/Apartments/Apartments";
import AboutPage from "@/Pages/About/AboutPage";
import FaqPage from "@/Pages/FAQ/FaqPage";
import DashboardHome from "@/Pages/Dashboard/DashboardHome";
import MyBookings from "@/Pages/Dashboard/MyBookings";
import Maintenance from "@/Pages/Dashboard/Maintenance";
import Profile from "@/Pages/Dashboard/Profile";
import LoginPage from "@/Pages/Auth/Login";
import SignUpPage from "@/Pages/Auth/Signup";
import ForgotPasswordForm from "@/Pages/Auth/ForgotPassword";
import VerifyEmailOTP from "@/Pages/Auth/VerifyEmailOTP";
import SetNewPassword from "@/Pages/Auth/SetNewPassword";
import InquiryPage from "@/Pages/Inquiry/InquiryPage";
import Terms from "@/Pages/Terms/Terms";
import Policy from "@/Pages/Policy/Policy";

import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../Dashboard/DashboardLayout";
import NotFound from "@/Pages/NotFound";
import { createBrowserRouter } from "react-router";
import SavedProperty from "@/Pages/LovedProperty/SaveProperty";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "apartment/:id", element: <ApartmentDetails /> },
      { path: "apartments", element: <Apartments /> },
      { path: "about", element: <AboutPage /> },
      { path: "faq", element: <FaqPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "signin", element: <LoginPage /> },
      { path: "forgot-password", element: <ForgotPasswordForm /> },
      { path: "verification", element: <VerifyEmailOTP /> },
      { path: "reset-password", element: <SetNewPassword /> },
      { path: "inquiry", element: <InquiryPage /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy-policy", element: <Policy /> },

      
      {
        path: "saved-property",
        element: (
          <ProtectedRoute>
            <SavedProperty />
          </ProtectedRoute>
        ),
      },

      // Catch-all 404
      { path: "*", element: <NotFound /> },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "bookings", element: <MyBookings /> },
      { path: "maintenance", element: <Maintenance /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);
