import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home";
import ApartmentDetails from "../ApartmentDetails/ApartmentDetails";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>
            },
            {
                index: true,
                path: "/apartment",
                element: <ApartmentDetails></ApartmentDetails>
            }
        ]
    }
]);