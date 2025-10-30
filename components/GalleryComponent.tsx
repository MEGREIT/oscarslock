import Image from "next/image";
import React, { useState } from "react";
import { height } from './OpenGraphImage';

export default function GalleryComponent() {
  // Generate an array of image paths
  // const images = Array.from(
  //   { length: 56 },
  //   (_, index) => `/gallery/${index + 1}.jpeg`
  // );
  const images = [
    "37.jpeg",
    "1.jpeg",
    "18.jpeg",
    "19.jpeg",
    "45.jpeg",
    "46.jpeg",
    "55.jpeg",
    "42.jpeg",
    "51.jpeg",
    "52.jpeg",
    "56.jpeg",
    "49.jpeg",
    "47.jpeg",
    "48.jpeg",
    "50.jpeg",
    "7.jpeg",
    "27.jpg",
    "5.jpg",
    "20.jpeg",
    "21.jpeg",
    "41.jpeg",
    "32.jpeg",
    "29.jpeg",
    "30.jpeg",
    "53.jpeg",
    "10.jpeg",
    "13.jpeg",
    "9.jpeg",
    "38.jpeg",
    "44.jpeg",
    "12.jpeg",
    "11.jpeg",
    "39.jpeg",
    "16.jpeg",
    "33.jpeg",
    "36.jpeg",
    "34.jpeg",
    "14.jpeg",
    "35.jpeg",
    "17.jpeg",
    "15.jpeg",
    "57.jpeg",
    "3.jpeg",
    "6.jpeg",
    "23.jpeg",
    "26.jpeg",
    "2.jpeg",
    "40.jpeg",
    "4.jpeg",
    "54.jpeg",
    "22.jpeg",
    "8.jpeg",
    "24.jpeg",
    "25.jpeg",
    "28.jpeg",
    "31.jpeg",
  ];

  return (
    <div className="p-4 pb-10 pt-16 md:pt-4 flex flex-col">
      <div className="grid justify-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {images.map((src, index) => (
          <GalleryTile key={index} src={`/gallery/${src}`} index={index} />
        ))}
      </div>
    </div>
  );
}

function GalleryTile({ src, index }: { src: string; index: number }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative mx-auto md:w-full mt-4 h-96">
      {!isLoaded && (
        <div className="absolute inset-0 rounded-lg animate-pulse bg-gray-200" />
      )}
      <Image
        src={src}
        width={100}
        alt="Gallery Image"
        loading="lazy"
        height={100}
        decoding="async"
        fetchPriority={index < 6 ? "high" : "auto"}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        onLoad={() => setIsLoaded(true)}
        className={
          "rounded-lg object-cover w-full h-96 transition-opacity duration-300 " +
          (isLoaded ? "opacity-100" : "opacity-0")
        }
      />
    </div>
  );
}
