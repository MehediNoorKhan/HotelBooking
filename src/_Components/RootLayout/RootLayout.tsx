import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import ScrollToTop from "@/Hooks/Scroll";
import { AnimatePresence } from "framer-motion";
import { useGlobalLoading } from "@/Hooks/useGlobalLoading";
import GlobalLoader from "../GlobalLoader";

export default function RootLayout() {

  const location = useLocation();
const isLoading = useGlobalLoading();
  return (
    <div className="bg-foreground flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar></Navbar>
      <div className="pt-24">
       <AnimatePresence mode="sync" initial={false}>
        {isLoading && <GlobalLoader />}
      <Outlet key={location.pathname} />
    </AnimatePresence>
      </div>
      <Footer></Footer>
    </div>
  );
}
