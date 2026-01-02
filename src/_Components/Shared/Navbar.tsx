import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart } from "lucide-react";

import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "NYC Apartments", path: "/apartments" },
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Inquiry", path: "/inquiry" },
    { label: "Go to Dashboard", path: "/dashboard" },
  ];

  /* ---------------- Scroll Logic ---------------- */
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Helpers ---------------- */
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* ================= Navbar ================= */}
      <header
        className={`
          fixed top-0 left-0 w-full z-30
          transition-all duration-500 ease-in-out
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
          ${
            isScrolled
              ? "backdrop-blur-xs bg-background/20 rounded-b-2xl"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-10 xl:px-[100px]">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-10 h-10 cursor-pointer" />
          </Link>

          {/* Right actions */}
          <div className="flex items-center gap-10">
            <Link
              to="/saved-property"
              className="bg-background flex items-center gap-2 py-2.5 px-4 rounded-full"
            >
              <Heart />
              <span className="hidden sm:block text-base font-medium">
                Saved Property
              </span>
            </Link>

            <button onClick={() => setIsMenuOpen(true)}>
              <img
                src={hamburger}
                alt="Menu"
                className="w-5 h-5 cursor-pointer"
              />
            </button>
          </div>
        </div>
      </header>

      {/* ================= Overlay ================= */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-foreground/30 z-40"
          onClick={closeMenu}
        />
      )}

      {/* ================= Slide Menu ================= */}
      <aside
        className={`
          fixed top-0 right-0 h-full z-50
          bg-foreground w-full sm:w-[490px]
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6">
          <h2 className="text-muted font-display text-2xl font-semibold">
            Menu
          </h2>
          <button
            onClick={closeMenu}
            className="text-muted text-3xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col pl-20 pr-10 mt-8 gap-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `relative py-4 text-[20px] transition-colors ${
                  isActive
                    ? "text-muted font-display italic"
                    : "text-muted hover:text-muted/80"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-muted transition-all duration-300 ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}

          {/* Auth Buttons */}
          <Link
            to="/signin"
            onClick={closeMenu}
            className="bg-muted text-foreground font-display font-extrabold py-3 px-6 rounded-lg mt-8 text-center"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            onClick={closeMenu}
            className="bg-muted text-foreground font-display font-extrabold py-3 px-6 rounded-lg mt-4 text-center"
          >
            Sign Up
          </Link>
        </nav>
      </aside>
    </>
  );
}
