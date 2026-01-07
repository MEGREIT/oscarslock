"use client";

import React from "react";
import Head from "next/head"; // Added for SEO title
import {
  PaymentBox,
  PaymentContainer,
  WhiteBackgroundContainer,
} from "../index";
import TextBubble from "@/components/TextBubble";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getCityPhone } from "@/utils/getCityPhone";
import PhoneBtn from "@/components/PhoneBtn";
import { GetServerSideProps } from "next"; // Added for Server Logic
import cityData from "@/utils/cities_data.json"; // Added for City Names

// --- STYLES ---
const Wrapper = styled.div`
  background-image: url(/coupons/Red_Yellow_Minimalist_Shopping_Coupon_2.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

// --- DATA ---
const coupons = [
  {
    id: 1,
    src: "/coupons/red.png",
  },
  {
    id: 2,
    src: "/coupons/yellow.png",
  },
  {
    id: 3,
    src: "/coupons/blue.png",
  },
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
            body, html {
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
            img {
              max-width: 100%;
              height: auto;
            }
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
  // Use the server-side phone prop (no more useEffect/useState delay)
  const phoneDisplay = phone || "(800) 687-0480";

  return (
    <>
      <Head>
        <title>Coupons - {cityNameDisplay} | Oscars Lock & Key Services</title>
        <meta name="description" content={`Discount Coupons for Locksmith Services in ${cityNameDisplay}`} />
      </Head>

      <WhiteBackgroundContainer>
        <div className="lg:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 space-y-2 lg:space-y-0 my-8 xl:max-w-[1190px] w-full justify-between">
          <div className="flex justify-center items-center mt-20 md:mt-0">
            <div className="flex flex-col md:space-y-3 bg-[#0A3161] shadow-lg p-2 md:p-5 rounded-lg">
              {coupons.map((coupon: any) => (
                <div
                  key={coupon.id}
                  onClick={() => {
                    handlePrint(coupon);
                  }}
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
          
          <PaymentBox>
            <PaymentContainer>
              <img src="/payment.png" alt="Accepted Payments" />
            </PaymentContainer>
            {/* USE DYNAMIC PHONE PROP */}
            <PhoneBtn phone={phoneDisplay} />
            <TextBubble />
            <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" alt="Logo" />
          </PaymentBox>
        </div>
      </WhiteBackgroundContainer>
    </>
  );
};

export default Coupons;

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

  // Sending these props updates the Global Navbar automatically in _app.tsx
  return { props: { phone, navbarTitle } };
};
