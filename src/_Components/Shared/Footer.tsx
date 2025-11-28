import facebookIcon from "../../images/facebookIcon.png";
import twitterIcon from "../../images/twitterIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import instagramIcon from "../../images/instagramIcon.png";
import logo from "../../images/logo.png";

export default function Footer() {
    return (
        <footer className="bg-black textprimarygray pt-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* LEFT LOGO & TEXT */}
                <div>
                    <img src={logo} className="xl:w-[58px] xl:h-[58px] xl:mb-[16px]" />
                    <p className="textprimarygray max-w-[200px]">
                        Your reliable partner for premium apartment
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-6">
                        <div className="p-[10px] bg-[#ffffff]/10 rounded-xl">
                            <a href="/" className="cursor-pointer hover:text-white transition"><img src={facebookIcon} className="xl:w-[20px] xl:h-[20px] cursor-pointer" /></a>
                        </div>
                        <div className="p-[10px] bg-[#ffffff]/10 rounded-xl">
                            <a href="/" className="cursor-pointer hover:text-white transition"><img src={twitterIcon} className="xl:w-[20px] xl:h-[20px] cursor-pointer" /></a>
                        </div>
                        <div className="p-[10px] bg-[#ffffff]/10 rounded-xl">
                            <a href="/" className="cursor-pointer hover:text-white transition"><img src={linkedinIcon} className="xl:w-[20px] xl:h-[20px] cursor-pointer" /></a>
                        </div>
                        <div className="p-[10px] bg-[#ffffff]/10 rounded-xl">
                            <a href="/" className="cursor-pointer hover:text-white transition"><img src={instagramIcon} className="xl:w-[20px] xl:h-[20px] cursor-pointer" /></a>
                        </div>
                    </div>
                </div>

                {/* QUICK LINKS */}
                <div>
                    <h3 className="text-white xl:text-[20px] font-semibold xl:mb-[24px]">Quick Links</h3>
                    <ul className="space-y-3">
                        <li className="cursor-pointer hover:text-white transition"><a href="/" className="cursor-pointer hover:text-white transition">Home</a></li>
                        <li className="cursor-pointer hover:text-white transition"><a href="/" className="cursor-pointer hover:text-white transition">Apartments</a></li>
                        <li className="cursor-pointer hover:text-white transition"><a href="/" className="cursor-pointer hover:text-white transition">Contact</a></li>
                    </ul>
                </div>

                {/* LEGAL */}
                <div>
                    <h3 className="text-white xl:text-[20px] font-semibold xl:mb-[24px]">Legal</h3>
                    <ul className="space-y-3">
                        <li className="cursor-pointer hover:text-white transition"><a href="/" className="cursor-pointer hover:text-white transition">Terms of Service</a></li>
                        <li className="cursor-pointer hover:text-white transition"><a href="/" className="cursor-pointer hover:text-white transition">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-white xl:text-[20px] font-semibold xl:mb-[24px]">Contact</h3>

                    <div className="space-y-3">
                        <p>456 Park Avenue, New York, NY</p>
                        <p>+1 212-555-1234</p>
                        <p>info@citypads.com</p>
                    </div>

                    <p className="mt-6 text-white font-light">Newsletter</p>

                    {/* INPUT FIELD */}
                    <input
                        type="text"
                        placeholder="Email"
                        className="
                            w-full mt-2 bg-transparent 
                            border-b border-[#ffffff] 
                            pb-1 outline-none
                            text-[#ffffff] font-medium placeholder-[#ffffff]
                        "
                    />
                </div>

            </div>

            {/* BOTTOM COPYRIGHT BAR */}
            <div className="max-w-7xl mx-auto border-t border-[#ffffff]/10 bg-[#000000] mt-[24px] xl:mt-[48px]">
                <p className="text-center py-6 textprimarygray">
                    © 2025. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
