import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import carouselimg1 from "../../images/carouselimg1.png";
import carouselimg2 from "../../images/carouselimg2.png";
import carouselimg3 from "../../images/carouselimg3.png";

export default function ChooseUs() {
    const [activeIndex, setActiveIndex] = useState(1);

    const slides = [
        { id: 1, image: carouselimg1, text: "Premium Interiors" },
        { id: 2, image: carouselimg2, text: "Luxury by Design" },
        { id: 3, image: carouselimg3, text: "Comfort & Elegance" },
    ];

    return (
        <div className="
            bg-[#161616]
            px-4 py-4
            
            md:px-10 md:py-4
            lg:px-20 lg:py-8
            xl:px-28 xl:py-8
            flex flex-col items-center text-center
        ">

            {/* Swiper Styles */}
            <style>{`
                .chooseus-swiper {
                    padding-bottom: 60px !important;
                }

                .chooseus-swiper .swiper-pagination {
                    bottom: 32px !important;
                }

                .chooseus-swiper .swiper-pagination-bullet {
                    background: #BFBFBF;
                    opacity: 0.5;
                    width: 8px;
                    height: 8px;
                }

                .chooseus-swiper .swiper-pagination-bullet-active {
                    background: #fff !important;
                    opacity: 1;
                }

                /* Default slides faded */
                .chooseus-swiper .swiper-slide {
                    opacity: 0.55;
                    transition: transform 0.35s ease, opacity 0.35s ease;
                }

                /* Active slide scaling */
                .chooseus-swiper .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1.12);
                }

                @media (min-width: 1280px) {
                    .chooseus-swiper .swiper-slide-active {
                        transform: scale(1.16);
                    }
                }
            `}</style>

            {/* Section Title */}
            <h2
                className="
                    text-white font-semibold
                    text-[26px]
                    sm:text-[30px]
                    md:text-[32px]
                    lg:text-[34px]
                    xl:text-[36px]
                    mb-10 md:mb-14 xl:mb-16
                "
            >
                Why Choose Us
            </h2>

            {/* Swiper */}
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                centeredSlides
                initialSlide={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="chooseus-swiper w-full"
                spaceBetween={30} // **bigger gap**
                slidesPerView={1}
                breakpoints={{
                    480: { slidesPerView: 1, spaceBetween: 35 },
                    640: { slidesPerView: 1, spaceBetween: 40 },
                    768: { slidesPerView: 1, spaceBetween: 45 },
                    1024: { slidesPerView: 3, spaceBetween: 50 },
                    1280: { slidesPerView: 3, spaceBetween: 55 },
                    1536: { slidesPerView: 3, spaceBetween: 60 },
                }}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="flex flex-col items-center pt-8 pb-10">

                            {/* Image */}
                            <img
                                src={slide.image}
                                alt="carousel slide"
                                className="
                                    rounded-[18px] shadow-md object-cover
                                    w-[260px] h-[190px]
                                    sm:w-[300px] sm:h-[210px]
                                    md:w-[360px] md:h-[260px]
                                    lg:w-[360px] lg:h-[260px]
                                    xl:w-[380px] xl:h-[280px]
                                    2xl:w-[440px] 2xl:h-[320px]
                                "
                            />

                            {/* Only active slide text */}
                            {activeIndex === index && (
                                <button
                                    className="
                                        bg-white text-black
                                        mt-4
                                        rounded-full shadow-md
                                        flex items-center gap-2
                                        text-[13px] px-5 py-2
                                        sm:text-[14px] sm:px-6 sm:py-2.5
                                        md:text-[15px] md:px-7 md:py-3
                                        lg:text-[16px]
                                        transition-all
                                    "
                                >
                                    {slide.text}
                                    <span className="text-[18px]">→</span>
                                </button>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
