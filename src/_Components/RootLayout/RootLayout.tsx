import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ScrollToTop from "@/Hooks/Scroll";

export default function RootLayout() {
  return (
    <div className="bg-foreground">
            <ScrollToTop />
      <Navbar></Navbar>
      <div className="pt-24">

      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}