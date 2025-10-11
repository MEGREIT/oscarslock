import React from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  "/slider/1.jpg",
  // "/slider/2.jpg",
  "/slider/3.jpg",
  // "/slider/4.jpg",
  // "/slider/5.jpg",
  // "/slider/6.jpg",
  // "/slider/7.jpg",
  // "/slider/8.jpg",
  "/slider/9.jpg",
  "/slider/10.jpg",
  "/slider/11.jpg",
  // "/slider/12.jpg",
  "/slider/13.jpg",
  "/slider/14.jpeg",
  // "/slider/15.jpeg",
  "/slider/16.jpeg",
  "/slider/17.jpeg",
  "/slider/18.jpeg",
  "/slider/19.jpeg",
  "/slider/20.jpeg",
];

const PhotoSlider: React.FC = () => {
  const location = {
    latitude: 42.2898, // Replace with any random latitude in Georgia
    longitude: -71.6802, // Replace with any random longitude in Georgia
  };
  const APIKey = `AIzaSyCiHbmEkwBoB-oyCjS7QQVT7VqpyVYn3Jk`;
  const mapUrl = `https://www.google.com/maps/embed/v1/view?zoom=8&center=${location.latitude},${location.longitude}&key=${APIKey}`;

  return (
    <div className=" flex  w-[80vw] md:w-[267px] h-auto flex-col">
      {/* <h1 className="text-left text-[6rem] ">Come Find us</h1> */}
      <div className="w-full border-2 border-gray-500 p-0  h-[30vh] min-h-[260px] rounded-lg overflow-hidden shadow-lg">
        {/* picture slider */}
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
          {images.map((image: any, idx: any) => (
            <SwiperSlide key={idx}>
              <img
                className="h-[30vh] min-h-[260px] w-full object-cover"
                src={image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoSlider;