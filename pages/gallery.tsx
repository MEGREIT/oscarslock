import Page from "@/components/Page";
import React from "react";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from ".";
import TextBubble from "@/components/TextBubble";
import "./style.css";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import { useRouter } from "next/router";
import GalleryComponent from "@/components/GalleryComponent";
import dynamic from "next/dynamic";
import Cta from "@/views/HomePage/Cta";
import PhoneBtn from "@/components/PhoneBtn";

const priceList = [
  {
    title: "Service Call",
    amount: 35,
    description: "Basic fee for the technician's visit and initial assessment.",
  },
  {
    title: "Lockout Service",
    amount: "65 - 195",
    description:
      "Price varies based on the security level of the lock requiring access.",
  },
  {
    title: "Lock Change",
    amount: "45 - 65",
    description:
      "Cost depends on the type of lock and level of security required.",
  },
  {
    title: "Lock Rekey",
    amount: "25 - 45",
    description: "Reconfiguration of the lock to work with a new key.",
  },
  {
    title: "Lock Repair",
    amount: "55 - 145",
    description: "Includes repair of damaged or malfunctioning locks.",
  },
  {
    title: "Hole Cut-Out For New Locks",
    amount: "85 - 125",
    description:
      "Service for creating new holes in doors for installing locks.",
  },
  {
    title: "Safe Opening",
    amount: "155 - 395",
    description: "Opening services for standard or high-security safes.",
  },
  {
    title: "Car Key (Non-Transponder)",
    amount: "155 - 205",
    description: "Non-electronic key duplication or replacement for vehicles.",
  },
  {
    title: "Car Key (Transponder)",
    amount: "205 - 275",
    description: "Electronic key replacement requiring programming.",
  },
  {
    title: "Car Key (Smart/Prox)",
    amount: "285 - 465",
    description:
      "Replacement for proximity or smart keys used in modern vehicles.",
  },
  {
    title: "Car Ignition Lock Cylinder Change / Repair",
    amount: "75 - 155",
    description: "Repair or replacement of car ignition lock cylinders.",
  },
];

const Gallery = () => {
  const router = useRouter();
  
  return (
    <WhiteBackgroundContainer>
      <div className="pl-5 xl:px-5 my-8 xl:max-w-[1190px] w-full">
        <GalleryComponent />
      </div>
      
      <div className="w-full flex flex-col pb-10">
        <PhoneBtn phone="(800) 687- 0480" />
        <Cta />
        <button
          onClick={() => {
            router.push("/coupons");
          }}
          className="bg-[#751318] text-xl md:text-2xl px-8 md:px-32 py-3 text-white mx-auto block mt-8 hover:bg-[#5e0a0a] transition-colors font-bold rounded-md shadow-md font-serif w-11/12 md:w-auto"
        >
          FOR COUPONS CLICK HERE
        </button>
      </div>
    </WhiteBackgroundContainer>
  );
};

export default Gallery;
