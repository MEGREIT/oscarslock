import React from "react";
import dynamic from "next/dynamic";

// Import Swiper dynamically with SSR disabled
const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);

const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

// Import Swiper modules - these don't need dynamic import
import { A11y, Autoplay, Navigation } from "swiper/modules";

const images = [
  "/slider/1.jpg",
  "/slider/3.jpg",
  "/slider/9.jpg",
  "/slider/10.jpg",
  "/slider/11.jpg",
  "/slider/13.jpg",
  "/slider/14.jpeg",
  "/slider/16.jpeg",
  "/slider/17.jpeg",
  "/slider/18.jpeg",
  "/slider/19.jpeg",
  "/slider/20.jpeg",
];

const PhotoSlider: React.FC = () => {
  return (
    <div className="flex w-[80vw] md:w-[267px] h-auto flex-col">
      <div className="w-full border-2 border-gray-500 p-0 h-[30vh] min-h-[260px] rounded-lg overflow-hidden shadow-lg">
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          centeredSlides
          navigation={false}
          loop
        >
          {images.map((image: string, idx: number) => (
            <SwiperSlide key={idx}>
              <img
                className="h-[30vh] min-h-[260px] w-full object-cover"
                src={image}
                alt={`Slider image ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoSlider;
