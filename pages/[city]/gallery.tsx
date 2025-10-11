import Page from "@/components/Page";
import React, { useEffect, useState } from "react";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from ".";
import TextBubble from "@/components/TextBubble";
import "../style.css";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import { useRouter } from "next/router";
import GalleryComponent from "@/components/GalleryComponent";
import Cta from "@/views/HomePage/Cta";
import PhoneBtn from "@/components/PhoneBtn";
import { getCityPhone } from "@/utils/getCityPhone";

const priceList = [
  {
    title: "Service Call",
    amount: 35,
    description: "Basic fee for the technician’s visit and initial assessment.",
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
  const { city } = router.query;

  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    if (typeof city === "string") {
      const phoneNumber = getCityPhone(city);
      setPhone(phoneNumber);
    }
  }, [city]);

  return (
    <WhiteBackgroundContainer>
      <div className="lg:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 space-y-2 lg:space-y-0 my-8 xl:max-w-[1190px] w-full justify-between">
        <GalleryComponent />
        <PaymentBox>
          <PaymentContainer>
            <img src="/payment.png" />
          </PaymentContainer>
          {phone && <PhoneBtn phone={phone} />}
          <TextBubble />
          <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" />
        </PaymentBox>
      </div>
      <div className="w-full flex flex-col pb-10">
        {phone && <PhoneBtn phone={phone} />}
        <Cta />
        <button
          onClick={() => {
            router.push("/coupons");
          }}
          className="text bg-[#751318] text-2xl px-32 py-2 text-white mx-auto"
        >
          FOR COUPONS CLICK HERE
        </button>
      </div>
    </WhiteBackgroundContainer>
  );
};

export default Gallery;
