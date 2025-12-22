import React, { useState, useEffect } from "react";
// --- FIX: Use standard imports instead of dynamic for components ---
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { A11y, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/a11y";

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
  // State to track if the component has mounted on the client
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true only after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Define a placeholder for SSR or initial render
  const placeholder = (
     <div className="flex w-[80vw] md:w-[267px] h-[30vh] min-h-[260px] border-2 border-gray-500 rounded-lg items-center justify-center bg-gray-200">
       <p className="text-gray-500">Loading slider...</p>
     </div>
  );

  return (
    <div className="flex w-[80vw] md:w-[267px] h-auto flex-col">
      <div className="w-full border-2 border-gray-500 p-0 h-[30vh] min-h-[260px] rounded-lg overflow-hidden shadow-lg">
        {/* Only render Swiper if isClient is true */}
        {isClient ? (
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            centeredSlides
            navigation={false} // Set to true if you want arrows
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
        ) : (
          // Render the placeholder on the server and before hydration
          placeholder
        )}
      </div>
    </div>
  );
};

export default PhotoSlider;
