"use client";

import Page from "@/components/Page";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from ".";
import TextBubble from "@/components/TextBubble";
import styled from "styled-components";
import { useRouter } from "next/router";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import PhoneBtn from "@/components/PhoneBtn";

const Wrapper = styled.div`
  background-image: url(/coupons/Red_Yellow_Minimalist_Shopping_Coupon_2.jpg);
  background-size: cover; /* Ensures the image covers the div without distortion */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
`;

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
const handlePrint = (coupon: { src: string }) => {
  // Create a new window for printing
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

    // Wait for the window to finish loading and then print
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
      // printWindow.close(); // Close the print window after printing
    };
  }
};

const Coupons = () => {
  const router = useRouter();
  return (
    <WhiteBackgroundContainer>
      <div className="lg:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 space-y-2 lg:space-y-0 my-8 xl:max-w-[1190px] w-full justify-between">
        <div className="flex justify-center items-center mt-20 md:mt-0">
          <div className="flex flex-col md:space-y-3  bg-[#0A3161] shadow-lg p-2 md:p-5 rounded-lg">
            {coupons.map((coupon: any) => (
              <div
                onClick={() => {
                  handlePrint(coupon);
                }}
                className="hover:cursor-pointer hover:scale-[1.03] transition-all ease-in-out"
              >
                <img
                  className="md:w-[500px] w-[350px] md:max-w-[500px]  object-cover"
                  src={coupon.src}
                />
              </div>
            ))}
          </div>
        </div>
        <PaymentBox>
          <PaymentContainer>
            <img src="/payment.png" />
          </PaymentContainer>
          <PhoneBtn phone="(508) 736-7178" />
          <TextBubble />
          <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" />
        </PaymentBox>
      </div>
    </WhiteBackgroundContainer>
  );
};

export default Coupons;
