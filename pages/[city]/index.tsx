import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import styled from "styled-components";
import Cta from "views/HomePage/Cta";
import Slider from "components/Slider";

// --- IMPORT CSS (Parent Folder) ---
import "../style.css"; 
// ----------------------------------

import OurTeam from "@/views/AboutPage/OurTeam";
import { useRouter } from "next/router";
import About from "@/components/About";
import { media } from "@/utils/media";
import TextBubble from "@/components/TextBubble";
import PhotoSlider from "@/components/PhotoSlider";
import CityServicesGrid from "@/components/CityServicesGrid";
import cityData from "@/utils/cities_data.json";
import GoogleScript from "@/components/Script";
import { useEffect, useState } from "react";
import { getCityPhone } from "@/utils/getCityPhone";
import PhoneBtn from "@/components/PhoneBtn";

// --- STATIC DATA (STRICT ORDER) ---
const STATIC_SERVICES = [
  { title: "Residential", slug: { current: "residential" } },
  { title: "Commercial", slug: { current: "commercial" } },
  { title: "Automotive", slug: { current: "automotive" } },
  { title: "Emergency", slug: { current: "emergency" } },
  { title: "Mailbox", slug: { current: "mailbox" } },
  { title: "Safe", slug: { current: "safe" } },
  { title: "Gallery", slug: { current: "gallery" } },
  { title: "Coupons", slug: { current: "coupons" } },
];

const STATIC_TESTIMONIALS = [
  { fullName: "John Doe", rating: 5, testimonial: "Excellent service!" },
  { fullName: "Sarah Smith", rating: 5, testimonial: "Very professional." },
  { fullName: "Michael B.", rating: 5, testimonial: "Great experience." },
];

export default function Homepage({
  services,
  testimonials,
  slug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const phoneNumber = getCityPhone(slug);
      setPhone(phoneNumber);
    }
  }, [slug]);

  return (
    <>
      <Head>
        <title>Oscars Lock & Key Services</title>
        <meta name="description" content={`Locksmith services in ${slug}`} />
      </Head>
      <GoogleScript />
      <HomepageWrapper>
        <Slider phone={phone} />
        <WhiteBackgroundContainer>
          <div className="flex flex-col items-center">
            <div className="lg:flex xl:align-top lg:space-x-4 space-y-2 lg:space-y-0 justify-center align-middle mx-0">
              <div className="flex flex-col mx-0 w-auto 2xl:max-w-[65%] xl:max-w-[80%]">
                
                {/* --- FIX: Pass 'services' directly. DO NOT SORT IT. --- */}
                <CityServicesGrid services={services} slug={slug} />
                {/* ----------------------------------------------------- */}

                {phone && <PhoneBtn phone={phone} />}
                <About />
              </div>
              <PaymentBox>
                <PaymentContainer><img src="/payment.png" /></PaymentContainer>
                {phone && <PhoneBtn phone={phone} />}
                <TextBubble />
                <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" />
              </PaymentBox>
            </div>
            <MapContainer>
              <OurTeam testimonials={testimonials} />
              {phone && <PhoneBtn phone={phone} />}
              <PhotoSlider />
            </MapContainer>
          </div>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <button onClick={() => router.push(`/${slug}/coupons`)} className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto">
            FOR COUPONS CLICK HERE
          </button>
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

// ... Styles ...
const HomepageWrapper = styled.div`max-width: 100vw; background-color: white; overflow: hidden; & > :last-child { margin-bottom: 2rem; }`;
export const PaymentContainer = styled.div`display: flex; justify-content: start; margin-top: -3.5rem; align-items: start; img { margin-bottom: auto; padding: 0; } ${media("<largeDesktop")} { margin-top: 0rem; }`;
export const PaymentBox = styled.div`display: flex; flex-direction: column; align-items: center; margin: 0 0; ${media(">=largeDesktop")} { width: 30%; } ${media("<=phone")} { margin: 0 2rem; }`;
const DarkerBackgroundContainer = styled.div`background: rgb(251, 251, 253); display: flex; max-width: 100vw; overflow: hidden; flex-direction: column; justify-content: center;`;
export const WhiteBackgroundContainer = styled.div`background: rgb(255, 255, 255); display: flex; flex-direction: column; justify-content: center; max-width: 100vw; overflow: hidden; padding: 0 10rem; padding-top: 5rem; & > *:not(:first-child) { margin-top: 3rem; } ${media("<=phone")} { padding: 0 0; } ${media(">largeDesktop")} { align-items: center; margin: 0 auto; } @media (min-width: 375px) and (max-width: 640px) { padding: 0 0; } @media (min-width: 2240px) { width: 60vw; margin: 0 auto; } @media (min-width: 1440px) { width: 100vw; margin: 0 auto; }`;
export const MapContainer = styled.div`display: flex; flex-direction: row; max-width: 60vw; align-items: center; padding: 0 0rem; justify-content: space-between; align-items: center; ${media("<tablet")} { flex-direction: column; } @media (min-width: 375px) and (max-width: 640px) { padding: 0 0; } @media (max-width: 1440px) and (min-width: 1024px) { max-width: 90vw; } @media (min-width: 1280px) { max-width: 1190px; overflow: hidden; } @media (min-width: 1280px) and (max-width: 2652px) { padding: 0 3rem; padding-left: 5rem; } @media (max-width: 1440px) and (min-width: 768px) { width: 1506px; }`;

export async function getServerSideProps(ctx: any) {
  const { params = {} } = ctx;
  const slug = params.city;
  const reserved = ["privacy-policy", "terms-conditions", "price", "gallery", "services", "safe", "commercial", "mailbox", "emergency", "residential", "coupons", "lock-repair", "automotive"];
  
  if (reserved.includes(slug)) {
    return { props: { slug, posts: [], services: STATIC_SERVICES, testimonials: STATIC_TESTIMONIALS } };
  }
  const isPresent = cityData.hcms_cities.some((city) => city.subdomain === slug);
  if (!isPresent) return { notFound: true };

  return {
    props: {
      slug,
      posts: [],
      services: STATIC_SERVICES, // Return static list directly
      testimonials: STATIC_TESTIMONIALS,
    },
  };
}