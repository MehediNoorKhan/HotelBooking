import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "NYC Apartments", path: "/apartments" },
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Inquiry", path: "/inquiry" },
  ];

// Animation and Sticky part

const [showNavbar, setShowNavbar] = useState(true);
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Glass effect trigger
    setIsScrolled(currentScrollY > 10);

    // Scroll direction logic
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      setShowNavbar(false); // scrolling down
    } else {
      setShowNavbar(true); // scrolling up
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <div
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-500 ease-in-out
    ${showNavbar ? "translate-y-0" : "-translate-y-full"}
    ${
      isScrolled
        ? "backdrop-blur-xs bg-background/20 rounded-b-2xl"
        : "bg-transparent"
    }
  `}
>
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-4 md:px-6 md:py-5 lg:px-10 lg:py-6 xl:px-[100px] xl:py-[38px]">
        <Link to="/">
        <img src={logo} className="w-10 h-10 cursor-pointer" />
        </Link>
        <img
          src={hamburger}
          className="w-5 h-5 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-foreground w-full sm:w-[490px] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-foreground">
        <div className="flex items-center justify-between px-6 py-6">
          <h2 className="text-muted font-display text-2xl font-semibold">Menu</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-muted text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col pl-20 pr-10 pb-[400px] mt-8 gap-2 bg-foreground rounded-l-lg  ">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `relative text-left py-4 text-[20px] ${
                  isActive ? "text-muted font-display italic" : "text-muted hover:text-muted/80"
                } transition-colors`
              }
              end
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-muted transition-all duration-300 ease-out ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Sign In */}
          <Link to={"/signin"} onClick={() => setIsMenuOpen(false)} className="bg-muted text-foreground font-display font-extrabold py-3 px-6 rounded-lg mt-8 w-full text-center">
            Sign In
          </Link>
          {/* Sign Up */}
          <Link to={"/signup"} onClick={() => setIsMenuOpen(false)} className="bg-muted text-foreground font-display font-extrabold py-3 px-6 rounded-lg mt-8 w-full text-center">
            Sign Up
          </Link>
        </nav>
      </div>
      </div>
    </div>
  );
}
