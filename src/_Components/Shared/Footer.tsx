import facebookIcon from "../../images/facebookIcon.png";
import twitterIcon from "../../images/twitterIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import instagramIcon from "../../images/instagramIcon.png";
import logo from "../../images/logo.png";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-foreground textprimarygray pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LEFT LOGO & TEXT */}
        <div>
          <img src={logo} className="xl:w-[58px] xl:h-[58px] xl:mb-4" />
          <p className="textprimarygray max-w-[200px]">
            Your reliable partner for premium apartment
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <div className="p-2.5 bg-background/10 hover:bg-primary transform transition-all ease-in rounded-xl">
              <a
                href="/"
                className="cursor-pointer hover:text-muted transition"
              >
                <img
                  src={facebookIcon}
                  className="xl:w-5 xl:h-5 cursor-pointer"
                />
              </a>
            </div>
            <div className="p-2.5 bg-background/10 hover:bg-primary transform transition-all ease-in rounded-xl">
              <a
                href="/"
                className="cursor-pointer hover:text-muted transition"
              >
                <img
                  src={twitterIcon}
                  className="xl:w-5 xl:h-5 cursor-pointer"
                />
              </a>
            </div>
            <div className="p-2.5 bg-background/10 hover:bg-primary transform transition-all ease-in rounded-xl">
              <a
                href="/"
                className="cursor-pointer hover:text-muted transition"
              >
                <img
                  src={linkedinIcon}
                  className="xl:w-5 xl:h-5 cursor-pointer"
                />
              </a>
            </div>
            <div className="p-2.5 bg-background/10 hover:bg-primary transform transition-all ease-in rounded-xl">
              <a
                href="/"
                className="cursor-pointer hover:text-muted transition"
              >
                <img
                  src={instagramIcon}
                  className="xl:w-5 xl:h-5 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-muted xl:text-[20px] font-semibold xl:mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li className="cursor-pointer hover:text-muted transition">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer hover:text-muted transition"
              >
                Home
              </Link>
            </li>

            <li className="cursor-pointer hover:text-muted transition">
              <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/apartments"
                className="cursor-pointer hover:text-muted transition"
              >
                Apartments
              </Link>
            </li>

            <li className="cursor-pointer hover:text-muted transition">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer hover:text-muted transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-muted xl:text-[20px] font-semibold xl:mb-6">
            Legal
          </h3>
          <ul className="space-y-3">
            <li className="cursor-pointer hover:text-muted transition">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer hover:text-muted transition"
              >
                
                Terms of Service
              </Link>
            </li>

            <li className="cursor-pointer hover:text-muted transition">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer hover:text-muted transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-muted xl:text-[20px] font-semibold xl:mb-6">
            Contact
          </h3>

          <div className="space-y-3">
            <p>456 Park Avenue, New York, NY</p>
            <p>+1 212-555-1234</p>
            <p>info@citypads.com</p>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="max-w-7xl mx-auto border-t border-background/10 bg-foreground mt-6 xl:mt-12">
        <p className="text-center py-6 textprimarygray">
          © 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
