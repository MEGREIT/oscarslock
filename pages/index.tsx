import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import Head from "next/head";
import styled from "styled-components";
import BasicSection from "components/BasicSection";
// import Link from "components/Link";
import { EnvVars } from "env";
import Cta from "views/HomePage/Cta";
import Partners from "views/HomePage/Partners";
import Divider from "components/Divider";
import Slider from "components/Slider";
import BlogPostSlider from "@/views/HomePage/BlogPostSlider";
import "./style.css";
import {
  getAllPartners,
  getAllPosts,
  getAllServices,
  getAllTestimonials,
  getClient,
} from "@/sanity/lib/client";
import HomeBasicSection from "@/components/HomeBasicSection";
import ServiceCard from "@/components/ServiceCard";
import ServicesSection from "@/components/ServicesSection";
import OurTeam from "@/views/AboutPage/OurTeam";
import Tabs from "@/components/Tabs";
import TextWrapper from "@/components/TextWrapper";
import { PortableText } from "@portabletext/react";
import { description } from "../lib/demo.data";
import PostBody from "@/components/PostBody";
import { useRouter } from "next/router";
import About from "@/components/About";
import { media } from "@/utils/media";
import citiesData from "@/utils/cities.json";
import ServicesGrid from "@/components/ServicesGrid";
import TextBubble from "@/components/TextBubble";
import PhotoSlider from "@/components/PhotoSlider";
import { useEffect } from "react";
import { calculateDistance } from "./_app";
import GoogleScript from "@/components/Script";
import PhoneBtn from "@/components/PhoneBtn";

const client = getClient();

export function sortBySlug(list: any) {
  return list.sort((a: any, b: any) => {
    if (a.slug.current < b.slug.current) {
      return -1;
    }
    if (a.slug.current > b.slug.current) {
      return 1;
    }
    return 0;
  });
}

export default function Homepage({
  services,
  testimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  // console.log(services);

  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Reliable locksmith service offering residential, commercial, and automotive lock solutions. Get fast, secure assistance for emergencies, lock changes, key replacements, and high-security systems. Licensed, bonded, and insured professionals serving your security needs."
        />
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
      <GoogleScript />
      <HomepageWrapper>
        <Slider />
        <WhiteBackgroundContainer>
          <div className="flex flex-col items-center">
            <div className="lg:flex xl:align-top lg:space-x-4  space-y-2 lg:space-y-0 justify-center align-middle mx-0">
              <div className="flex flex-col mx-0 w-auto 2xl:max-w-[65%] xl:max-w-[80%]">
                <ServicesGrid services={sortBySlug(services)} />
                <PhoneBtn phone="(508) 736-7178" />
                <About />
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
            <MapContainer>
              <OurTeam testimonials={testimonials} />
              <PhoneBtn phone="(508) 736-7178" />
              <PhotoSlider />
            </MapContainer>
            {/* <MapContainer>
              
            </MapContainer> */}
          </div>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <button
            onClick={() => {
              router.push("/coupons");
            }}
            className="text bg-[#751318] text-2xl px-32 py-2 text-white mx-auto"
          >
            FOR COUPONS CLICK HERE
          </button>
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  max-width: 100vw;
  background-color: white;
  overflow: hidden;
  & > :last-child {
    margin-bottom: 2rem;
  }
`;

export const PaymentContainer = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: start;
  margin-top: -3.5rem;
  /* margin: 2rem 0; */
  align-items: start;
  /* border-left: solid 1px #83838390; */

  img {
    margin-bottom: auto;
    padding: 0;
  }
  ${media("<largeDesktop")} {
    margin-top: 0rem;
  }
`;
export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0;
  ${media(">=largeDesktop")} {
    width: 30%;
  }
  ${media("<=phone")} {
    margin: 0 2rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(251, 251, 253);
  display: flex;
  max-width: 100vw;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  & > *:not(:first-child) {
    /* margin-top: 15rem; */
  }
`;

export const WhiteBackgroundContainer = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 10rem;
  padding-top: 5rem;

  & > :last-child {
    /* padding-bottom: 15rem; */
  }

  & > *:not(:first-child) {
    margin-top: 3rem;
  }
  ${media("<=phone")} {
    padding: 0 0;
  }
  ${media(">largeDesktop")} {
    align-items: center;
    /* max-width: 60vw; */
    margin: 0 auto;
  }
  @media (min-width: 375px) and (max-width: 640px) {
    padding: 0 0;
  }
  @media (min-width: 2240px) {
    width: 60vw;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 100vw;
    margin: 0 auto;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: yellow; */
  max-width: 60vw;
  align-items: center;
  padding: 0 0rem;
  justify-content: space-between;
  align-items: center;
  ${media("<tablet")} {
    flex-direction: column;
  }

  @media (min-width: 375px) and (max-width: 640px) {
    padding: 0 0;
  }

  @media (max-width: 1440px) and (min-width: 1024px) {
    max-width: 90vw;
  }

  @media (min-width: 1280px) {
    max-width: 1190px;
    /* margin: 0 2rem; */
    overflow: hidden;
  }
  @media (min-width: 1280px) and (max-width: 2652px) {
    padding: 0 3rem;
    padding-left: 5rem;
  }
  @media (max-width: 1440px) and (min-width: 768px) {
    width: 100%;
    /* width: 90vw; */
    /* padding-left: 5rem; */
    /* margin: 0 auto; */
  }
`;

export async function getServerSideProps() {
  const data = await getAllServices(client);
  const services = data.sort((a, b) => a.title.localeCompare(b.title));
  return {
    props: {
      posts: await getAllPosts(client),
      services: services,
      testimonials: await getAllTestimonials(client),
    },
  };
}
