import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Home/Home";
import ApartmentDetails from "../../Pages/ApartmentDetails/ApartmentDetails";
import Apartments from "../../Pages/Apartments/Apartments";




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
                path: "/apartment/:id",
                element: <ApartmentDetails/>
            },
            {
                index: true,
                path: "/apartments",
                element: <Apartments/>
            }
        ]
    }
]);