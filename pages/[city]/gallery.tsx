import Head from "next/head";
import React from "react";
import TextBubble from "@/components/TextBubble";
import "../style.css";
import { useRouter } from "next/router";
import GalleryComponent from "@/components/GalleryComponent";
import Cta from "@/views/HomePage/Cta";
import PhoneBtn from "@/components/PhoneBtn";
import { getCityPhone } from "@/utils/getCityPhone";
import { GetServerSideProps } from "next";
import cityData from "@/utils/cities_data.json";
import styled from "styled-components";
import { media } from "@/utils/media";
import { EnvVars } from "env";

// --- INTERFACE ---
interface GalleryProps {
  phone: string;
  navbarTitle: string;
}

const Gallery = (props: GalleryProps) => {
  const router = useRouter();
  const { phone, navbarTitle } = props; 

  return (
    <>
      <Head>
        <title>Gallery - {navbarTitle} | {EnvVars.SITE_NAME}</title>
        <meta name="description" content="View our recent work" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WPNF8ZTD');
            `,
          }}
        />
      </Head>

      {/* Matching the home gallery structure exactly */}
      <WhiteBackgroundContainer>
        <div className="pl-5 xl:px-5 my-8 xl:max-w-[1190px] w-full">
          <GalleryComponent />
        </div>
        
        <div className="w-full flex flex-col pb-10">
          <PaymentBox>
            <PaymentContainer>
              <img src="/payment.png" alt="Payments" />
            </PaymentContainer>
            <PhoneBtn phone={phone} />
            <TextBubble />
            <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" alt="Logo" />
          </PaymentBox>

          <PhoneBtn phone={phone} />
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
    </>
  );
};

export default Gallery;

// --- SERVER SIDE LOGIC ---
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const city = params.city as string;
  let phone = "(800) 687- 0480";
  let navbarTitle = "Need a Local Locksmith?";

  if (city) {
    try {
      const cityPhone = getCityPhone(city);
      if (cityPhone) {
        phone = cityPhone;
      }

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

// --- STYLED COMPONENTS (Matching home gallery) ---

const WhiteBackgroundContainer = styled.div`
  background: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: -3.5rem;
  align-items: start;
  img { margin-bottom: auto; padding: 0; }
  ${media("<largeDesktop")} { margin-top: 0rem; }
`;

const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  
  ${media(">=largeDesktop")} { width: 30%; }
  ${media("<=phone")} { margin: 0 2rem 2rem 2rem; }
`;
