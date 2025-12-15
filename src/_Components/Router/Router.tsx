import { createBrowserRouter } from "react-router";
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




export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
  element: <Home />,
            },
            {
                
                path: "/apartment/:id",
                element: <ApartmentDetails/>
            },
            {
               
                path: "/apartments",
                element: <Apartments/>
            }
            ,
            {
              
                path: "/about",
                element: <AboutPage/>
            },
            {
               
                path: "/faq",
                element: <FaqPage/>
            },
            {
               
                path: "/signup",
                element: <SignUpPage/>
            },
            {
               
                path: "/signin",
                element: <LoginPage/>
            }
        ]
    },

    // Dashboard routes (add later with protected route)
    {
  path: "/dashboard",
  children: [
    {
      index: true,
      element: <DashboardHome />,
    },
    {
      path: "bookings",
      element: <MyBookings />,
    },
    {
      path: "maintenance",
      element: <Maintenance />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
  ],
}
]);