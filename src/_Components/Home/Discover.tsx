import discoverimage from "../../images/discoverimg.jpg";
import rightarrow from "../../images/rightarrow.png";

export default function Discover() {
    return (
        <div
            className="
                relative 
                w-full 
                px-[16px]
                xl:px-[100px] 
                xl:py-[100px]
                bg-[#161616]
            "
        >
            {/* Image Wrapper (so rounding applies to image + overlay) */}
            <div className="relative w-full overflow-hidden rounded-[13px]">

                {/* Background Image */}
                <img
                    src={discoverimage}
                    alt="Discover Apartment"
                    className="
                        w-full 
                        h-[480px] 
                        md:h-[550px] 
                        lg:h-[700px] 
                        xl:h-[750px]
                        object-cover
                        rounded-[13px]
                    "
                />

                {/* Dark gradient for readability */}
                <div className="absolute inset-0 "></div>

                {/* Bottom-left Text */}
                <div
                    className="
        absolute bottom-6
        md:bottom-10 
        max-w-[90%] md:max-w-[45%]
        text-white
        pb-[80px]
        p-4 md:p-6
    "
                    style={{
                        background: "linear-gradient(90deg, rgba(0,0,0,0.35) 0.01%, rgba(102,102,102,0) 99.99%)"
                    }}
                >
                    <p className="text-sm md:text-base leading-relaxed">
                        Welcome to your new apartment! This cozy one-bedroom unit features
                        modern amenities, a spacious living area, and large windows that let
                        in plenty of natural light. The kitchen is equipped with stainless
                        steel appliances and ample storage space, perfect for cooking your
                        favorite meals. Enjoy the convenience of in-unit laundry and a private
                        balcony for relaxing evenings. Located in a vibrant neighborhood,
                        you'll have easy access to shops, restaurants, and parks. Make this
                        charming apartment your new home!
                    </p>
                </div>


                {/* Bottom-right Button */}
                <div
                    className="
                        absolute bottom-6 right-6
                        md:bottom-10 md:right-10
                    "
                >
                    <button
                        className="
                            flex items-center gap-2
                            bg-white text-black 
                            px-5 py-2 md:px-6 md:py-2.5
                            rounded-full shadow-md
                            text-sm md:text-base font-medium
                        "
                    >
                        Discover the apartment
                        <img src={rightarrow} alt="arrow" className="w-4 md:w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
