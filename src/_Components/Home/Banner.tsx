import herobg from "../../images/herobg.png";
import locationIcon from "../../images/locationIcon.png";
import checkinIcon from "../../images/checkinIcon.png";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Banner() {
    return (
        <div
            className=" 
        bg-cover bg-top bg-no-repeat 
        min-h-screen
        relative 
        -mt-30
        flex flex-col items-start justify-start
       px-4        /* default for small */
                    md:px-6  /* medium */
                    lg:px-10  /* large */
                    xl:px-[100px]
        pt-44 pb-32 md:py-64 lg:py-76 xl:py-92
    "
            style={{
                backgroundImage: `
            linear-gradient(
                180deg,
                rgba(0,0,0,0.15) 0%,
                rgba(0,0,0,0.25) 40%,
                rgba(0,0,0,0.50) 75%,
                rgba(0,0,0,0.50) 100%
            ),
            url(${herobg})
        `,
            }}
        >
            {/* Content wrapper */}
            <div className="max-w-7xl mx-auto text-center space-y-3">
                {/* Title */}
                <h1
                    className=" xl:w-7xl
                        text-white font-bold leading-tight 
                        text-2xl md:text-4xl lg:text-5xl   /* responsive */
                         xl:text-[64px]
                    "
                >
                    Experience Luxury Living in New York
                </h1>

                {/* Subtitle */}
                <p
                    className="
                        text-white opacity-90 mt-4
                        text-base md:text-lg lg:text-[18px] xl:text-[20px]  /* responsive */
                        xl:w-7xl xl:text-[26px] xl:mt-[24px] xl:mb-[48px]
                    "
                >
                    Discover our curated collection of premium apartments in Manhattan’s
                    most exclusive neighborhoods. Refined elegance meets exceptional
                    service.
                </p>

                {/* Booking Box */}
                <div
                    className="
                        mx-auto rounded-3xl
                        bg-white/10 backdrop-blur-[15.3px]
                        border border-white/15
                        p-5 md:p-6 lg:p-8            /* responsive padding */
                        xl:pt-[30px] xl:pb-[50px] xl:px-[50px]
                    "
                >
                    <h3
                        className="
                            text-white text-start font-bold 
                            text-lg md:text-xl          /* responsive */
                            xl:text-[20px]  mb-[8px]  md:mb-[12px] xl:mb-[20px]
                        "
                    >
                        Book your apartment
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Location */}
                        <div
                            className="
                                flex items-center gap-2 border border-white/35 text-white/35 
                                px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5   /* responsive */
                                rounded-xl
                                xl:px-[18px] xl:py-[21px]
                            "
                        >
                            <img src={locationIcon} className="w-6 h-6" />
                            <span className="flex-1 text-white text-sm md:text-base lg:text-lg xl:text-[18px]">
                                Location
                            </span>
                            <RiArrowDropDownLine size={28} className="cursor-pointer" />
                        </div>

                        {/* Check-in */}
                        <div
                            className="
                                flex items-center gap-2 border border-white/35 text-white/35 
                                px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5
                                rounded-xl
                                xl:px-[18px] xl:py-[21px] cursor-pointer
                            "
                        >
                            <img src={checkinIcon} className="w-6 h-6" />
                            <span className="flex-1 text-white text-sm md:text-base lg:text-lg xl:text-[18px]">
                                Check-in
                            </span>
                        </div>

                        {/* Check-out */}
                        <div
                            className="
                                flex items-center gap-2 border border-white/35 text-white/35 
                                px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5
                                rounded-xl
                                xl:px-[18px] xl:py-[21px] cursor-pointer
                            "
                        >
                            <img src={checkinIcon} className="w-6 h-6" />
                            <span className="flex-1 text-white text-sm md:text-base lg:text-lg xl:text-[18px]">
                                Check-out
                            </span>
                        </div>

                        {/* Search Button */}
                        <button
                            className="
                                bg-[#D4BB8C] text-white font-bold 
                                py-3 md:py-4 lg:py-5
                                rounded-xl cursor-pointer
                                text-base md:text-lg lg:text-xl
                                xl:text-[20px] xl:px-[87px] xl:py-[26px] cursor-pointer
                            "
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
