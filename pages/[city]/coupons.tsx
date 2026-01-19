"use client";

import React from "react";
import Head from "next/head"; 
import styled from "styled-components";
import { useRouter } from "next/router";
import { getCityPhone } from "@/utils/getCityPhone";
import PhoneBtn from "@/components/PhoneBtn";
import TextBubble from "@/components/TextBubble";
import { GetServerSideProps } from "next"; 
import cityData from "@/utils/cities_data.json";
import { media } from "@/utils/media";

// --- STYLES ---
const Wrapper = styled.div`
  background-image: url(/coupons/Red_Yellow_Minimalist_Shopping_Coupon_2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// --- LOCAL STYLES (Fixed to prevent Import Errors & Zoom Bug) ---
const WhiteBackgroundContainer = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  /* LAYOUT FIXES */
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  
  /* MOBILE FIRST PADDING (Starts small for phones) */
  padding: 0 1.25rem;
  
  /* TABLET */
  @media (min-width: 768px) {
    padding: 0 3rem;
  }
  
  /* DESKTOP (Only adds big padding on big screens) */
  @media (min-width: 1280px) { 
    margin: 0 auto; 
    max-width: 1550px; 
    padding: 0 10rem;
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: -3.5rem;
  align-items: start;
  
  img { 
    margin-bottom: auto; 
    padding: 0; 
    max-width: 100%; 
    height: auto; 
  }
  ${media("<largeDesktop")} { margin-top: 0rem; }
`;

const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  
  ${media(">=largeDesktop")} { width: 30%; }
  ${media("<=phone")} { margin: 2rem 0; }
`;

// --- DATA ---
const coupons = [
  { id: 1, src: "/coupons/red.png" },
  { id: 2, src: "/coupons/yellow.png" },
  { id: 3, src: "/coupons/blue.png" },
];

// --- HELPERS ---
const handlePrint = (coupon: { src: string }) => {
  const printWindow = window.open("", "_blank") as Window;
  if (printWindow) {
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Coupon</title>
          <style>
            body, html { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <img src="${coupon.src}" alt="Coupon Image" />
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
    };
  }
};

// --- INTERFACE ---
interface CouponsProps {
  phone: string;
  navbarTitle: string;
}

// --- COMPONENT ---
const Coupons = ({ phone, navbarTitle }: CouponsProps) => {
  const router = useRouter();

  // Dynamic City Name for SEO
  const cityNameDisplay = navbarTitle || "Need a Local Locksmith?";
  const phoneDisplay = phone || "(800) 687-0480";

  return (
    <>
      <Head>
        <title>Coupons - {cityNameDisplay} | Oscars Lock & Key Services</title>
        <meta name="description" content={`Discount Coupons for Locksmith Services in ${cityNameDisplay}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <WhiteBackgroundContainer>
        <div className="lg:flex xl:align-top lg:space-x-0 pl-0 md:pl-5 xl:px-5 space-y-2 lg:space-y-0 my-8 xl:max-w-[1190px] w-full justify-between">
          
          {/* COUPONS SECTION */}
          <div className="flex justify-center items-center mt-20 md:mt-0">
            <div className="flex flex-col md:space-y-3 bg-[#0A3161] shadow-lg p-2 md:p-5 rounded-lg">
              {coupons.map((coupon: any) => (
                <div
                  key={coupon.id}
                  onClick={() => handlePrint(coupon)}
                  className="hover:cursor-pointer hover:scale-[1.03] transition-all ease-in-out"
                >
                  <img
                    className="md:w-[500px] w-[350px] md:max-w-[500px] object-cover"
                    src={coupon.src}
                    alt="Coupon"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* SIDEBAR */}
          <PaymentBox>
            <PaymentContainer>
              <img src="/payment.png" alt="Accepted Payments" />
            </PaymentContainer>
            <PhoneBtn phone={phoneDisplay} />
            <TextBubble />
            {/* Added max-width and w-full to prevent zoom issues */}
            <img src="/logos/oscar-logo.png" className="w-full max-w-[25rem] ml-0" alt="Logo" />
          </PaymentBox>

        </div>
      </WhiteBackgroundContainer>
    </>
  );
};

export default Coupons;

// --- SERVER SIDE LOGIC ---
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const city = params.city as string;

  let phone = "(800) 687- 0480";
  let navbarTitle = "Need a Local Locksmith?";

  if (city) {
    try {
      // 1. Get Phone
      const cityPhone = getCityPhone(city);
      if (cityPhone) phone = cityPhone;

      // 2. Get Navbar Title
      const cityObj = cityData.hcms_cities.find((c) => c.subdomain === city);
      if (cityObj && cityObj.city) {
         navbarTitle = cityObj.city;
      } else {
         navbarTitle = city.charAt(0).toUpperCase() + city.slice(1);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { props: { phone, navbarTitle } };
};
