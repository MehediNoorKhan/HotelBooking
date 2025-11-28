import properties from "../../data/featuredProperties.json";
import locationicon from "../../images/locationIconCardgray.png";
import guesticon from "../../images/guesticonCardgray.png";
import bathroomicon from "../../images/bathroomiconCardgray.png";
import wifiicon from "../../images/wifiiconCardgray.png";
import acicon from "../../images/aciconCardgray.png";
import kitchenicon from "../../images/kitcheniconCardgray.png";
import gymicon from "../../images/gymiconCardgray.png";

export default function FeaturedProperties() {
    return (
        <div className="bg-[#161616] px-[12px] py-[30px] sm:px-[20px] sm:py-[40px] md:px-[40px] lg:px-[60px] xl:px-[100px] xl:py-[100px]">

            {/* Title */}
            <div className="flex flex-col justify-center items-center text-center gap-[12px] mb-[30px] xl:mb-[50px]">
                <span className="bg-[#F4F5F7] text-black text-[14px] sm:text-[16px] px-[14px] py-[8px] rounded-2xl xl:text-[18px] xl:px-[20px] xl:py-[10px]">
                    Featured Properties
                </span>

                <p className="text-white text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] xl:text-[16px]">
                    Handpicked apartments that embody sophistication and comfort in New York’s most prestigious locations.
                </p>
            </div>

            {/* Grid */}
            <div className="
                grid grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-[20px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] xl:gap-[40px]
            ">

                {properties.map((item) => (
                    <div
                        key={item.id}
                        className="
                            bg-white rounded-[12px] overflow-hidden
                            border border-[#E5E5E5]
                            shadow-sm transition-all duration-200 hover:shadow-lg
                        "
                    >

                        {/* Image */}
                        <div
                            className="relative w-full"
                            style={{
                                height: "200px",
                            }}
                        >
                            <img
                                src={item.image}
                                className="w-full h-full object-cover rounded-t-[12px]"
                                alt={item.title}
                            />

                            {/* Price badge */}
                            <div
                                className="
                                    absolute top-[10px] right-[10px]
                                    bg-white px-[8px] py-[6px] rounded-full text-[14px]
                                    sm:top-[12px] sm:right-[12px] sm:text-[15px]
                                    md:text-[16px]
                                    xl:top-3 xl:right-3 xl:px-[9px] xl:py-[9px] xl:text-[16px]
                                "
                            >
                                ${item.price}/<span className="text-[12px]">mo</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-[14px] pt-[12px] pb-[18px] sm:px-[16px] md:px-[18px] xl:px-[16px] xl:pt-[12px] xl:pb-[20px]">

                            {/* Title */}
                            <h3 className="text-[16px] sm:text-[17px] md:text-[18px] text-[#222] mt-[10px] mb-[6px] font-medium xl:text-[18px]">
                                {item.title}
                            </h3>

                            {/* Location */}
                            <div className="flex items-center gap-[8px] sm:gap-[10px] mb-[6px]">
                                <img src={locationicon} className="w-[16px] h-[16px]" alt="location" />
                                <p className="text-[#4A5565] text-[14px] sm:text-[15px] xl:text-[14px]">
                                    {item.location}
                                </p>
                            </div>

                            {/* Beds & Baths */}
                            <div className="flex items-center gap-[16px] sm:gap-[20px] md:gap-[24px] mb-[8px]">

                                <div className="flex items-center gap-[8px] sm:gap-[10px]">
                                    <img src={guesticon} className="w-[16px] h-[16px]" alt="bedroom" />
                                    <p className="text-[#4A5565] text-[14px] sm:text-[15px] xl:text-[14px]">
                                        {item.bedroom} Bedrooms
                                    </p>
                                </div>

                                <div className="flex items-center gap-[8px] sm:gap-[10px]">
                                    <img src={bathroomicon} className="w-[16px] h-[16px]" alt="bathroom" />
                                    <p className="text-[#4A5565] text-[14px] sm:text-[15px] xl:text-[14px]">
                                        {item.bathroom} Bathrooms
                                    </p>
                                </div>
                            </div>

                            {/* Facilities */}
                            <div className="flex flex-wrap items-center gap-[14px] sm:gap-[18px] md:gap-[22px] xl:gap-[30px] mb-[10px]">
                                {item.facilities.includes("WiFi") && (
                                    <div className="flex items-center gap-[8px]">
                                        <img src={wifiicon} className="w-[16px] h-[16px]" alt="wifi" />
                                        <p className="text-[#4A5565] text-[14px]">WiFi</p>
                                    </div>
                                )}

                                {item.facilities.includes("AC") && (
                                    <div className="flex items-center gap-[8px]">
                                        <img src={acicon} className="w-[16px] h-[16px]" alt="ac" />
                                        <p className="text-[#4A5565] text-[14px]">AC</p>
                                    </div>
                                )}

                                {item.facilities.includes("Kitchen") && (
                                    <div className="flex items-center gap-[8px]">
                                        <img src={kitchenicon} className="w-[16px] h-[16px]" alt="kitchen" />
                                        <p className="text-[#4A5565] text-[14px]">Kitchen</p>
                                    </div>
                                )}

                                {item.facilities.includes("Gym") && (
                                    <div className="flex items-center gap-[8px]">
                                        <img src={gymicon} className="w-[16px] h-[16px]" alt="gym" />
                                        <p className="text-[#4A5565] text-[14px]">Gym</p>
                                    </div>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                className="
                                    mt-[14px] w-full border border-[#EBE0CA] text-black
                                    py-[10px] rounded-xl text-[14px] sm:text-[15px] md:text-[16px]
                                    font-medium transition hover:bg-[#D4BB8C] hover:text-white
                                    xl:py-[8px] xl:px-[137px] cursor-pointer
                                "
                            >
                                See details...
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
