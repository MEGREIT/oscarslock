import Page from "@/components/Page";
import React from "react";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from "../index";
import TextBubble from "@/components/TextBubble";
import "../style.css";
import { useRouter } from "next/router";
import GalleryComponent from "@/components/GalleryComponent";
import Cta from "@/views/HomePage/Cta";
import PhoneBtn from "@/components/PhoneBtn";
import { getCityPhone } from "@/utils/getCityPhone";
import { GetServerSideProps } from "next";
import cityData from "@/utils/cities_data.json";

// --- INTERFACE ---
interface GalleryProps {
  phone: string;
  navbarTitle: string;
}

const Gallery = (props: GalleryProps) => {
  const router = useRouter();
  const { phone, navbarTitle } = props; 

  return (
    <Page 
      title={`Gallery - ${navbarTitle}`} 
      description="View our recent work" 
      phone={phone}
      navbarTitle={navbarTitle}
    >
      <WhiteBackgroundContainer>
        {/* REMOVED SIDEBAR - Full width gallery */}
        <div className="pl-5 xl:px-5 my-8 xl:max-w-[1190px] w-full">
          <GalleryComponent />
        </div>
        
        <div className="w-full flex flex-col pb-10">
          <PhoneBtn phone={phone} />
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
    </Page>
  );
};

export default Gallery;

// --- SERVER SIDE LOGIC (Fixes the Navbar) ---
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const city = params.city as string;
  let phone = "(800) 687- 0480";
  let navbarTitle = "Need a Local Locksmith?";

  if (city) {
    try {
      // 1. Get Phone
      const cityPhone = getCityPhone(city);
      if (cityPhone) {
        phone = cityPhone;
      }

      // 2. Get Navbar Title (City + State)
      const cityObj = cityData.hcms_cities.find((c) => c.subdomain === city);
      if (cityObj && cityObj.city) {
        navbarTitle = cityObj.city;
      } else {
        navbarTitle = city.charAt(0).toUpperCase() + city.slice(1);
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  }

  return {
    props: {
      phone,
      navbarTitle,
    },
  };
};
