import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.png";

export default function Navbar() {
    return (
        <div className="w-full relative z-50">
            <div
                className="
                    flex items-center justify-between
                    px-4 py-4        /* default for small */
                    md:px-6 md:py-5  /* medium */
                    lg:px-10 lg:py-6 /* large */
                    xl:px-[100px] xl:py-[38px] /* EXACT same for xl */
                "
            >
                <img src={logo} className="w-10 h-10 cursor-pointer" />
                <img src={hamburger} className="w-5 h-5 cursor-pointer" />
            </div>
        </div>
    );
}
