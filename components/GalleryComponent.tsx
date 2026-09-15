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
    // 1 and 2 placed as the first and second images
    "1.webp",
    "2.webp",
    // 5 and 27 reversed
    "27.webp",
    "5.webp",
    // 42 and 50 reversed
    "50.webp",
    "42.webp",
    
    // The rest of the original images
    "side1.webp",
    "side2.webp",
    "side3.webp",
    "side4.webp",
    "3.webp",
    "4.webp",
    // 7.webp removed
    "8.webp",
    "9.webp",
    "10.webp",
    "12.webp",
    "13.webp",
    "14.webp",
    "15.webp",
    "17.webp",
    "18.webp",
    "19.webp",
    "20.webp",
    "21.webp",
    "22.webp",
    // 24 and 27_1 reversed
    "27_1.webp",
    "25.webp",
    "24.webp",
    "28.webp",
    "29.webp",
    "30.webp",
    "31.webp",
    "32.webp",
    "33.webp",
    // 34 and 36 reversed
    "36.webp",
    "35.webp",
    "34.webp",
    "37.webp",
    "38.webp",
    "39.webp",
    "40.webp",
    "41.webp",
    "43.webp",
    "44.webp",
    // 45 and 46 reversed
    "46.webp",
    "45.webp",
    "47.webp",
    "48.webp",
    "49.webp",
    "52.webp",
    "53.webp",
    // 54.webp removed
    "55.webp",
    "56.webp",
    "57.webp",
    "side5.webp",
    "side6.webp",
    "side7.webp",
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
