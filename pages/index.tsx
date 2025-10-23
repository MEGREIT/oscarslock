import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { EnvVars } from "env";
import Cta from "views/HomePage/Cta";
import Divider from "components/Divider";
import Slider from "components/Slider";
import "./style.css";
import {
  getAllPosts,
  getAllServices,
  getAllTestimonials,
  getClient,
} from "@/sanity/lib/client";
import { useRouter } from "next/router";
import About from "@/components/About";
import { media } from "@/utils/media";
import ServicesGrid from "@/components/ServicesGrid";
import TextBubble from "@/components/TextBubble";
import { useEffect } from "react";
import GoogleScript from "@/components/Script";
import PhoneBtn from "@/components/PhoneBtn";
import OurTeam from "@/views/AboutPage/OurTeam";

// Load PhotoSlider only on client-side to avoid SSR issues with Swiper
const PhotoSlider = dynamic(() => import("@/components/PhotoSlider"), {
  ssr: false,
  loading: () => (
    <div className="flex w-[80vw] md:w-[267px] h-[30vh] min-h-[260px] border-2 border-gray-500 rounded-lg items-center justify-center">
      <p>Loading...</p>
    </div>
  ),
});

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

  useEffect(() => {}, []);
  
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Reliable locksmith service offering residential, commercial, and automotive lock solutions. Get fast, secure assistance for emergencies, lock changes, key replacements, and high-security systems. Licensed, bonded, and insured professionals serving your security needs."
        />
      </Head>
      #<GoogleScript />
      <HomepageWrapper>
        <Slider />
        <WhiteBackgroundContainer>
          <div className="flex flex-col items-center">
            <div className="lg:flex xl:align-top lg:space-x-4  space-y-2 lg:space-y-0 justify-center align-middle mx-0">
              <div className="flex flex-col mx-0 w-auto 2xl:max-w-[65%] xl:max-w-[80%]">
                <ServicesGrid services={sortBySlug(services)} />
                <PhoneBtn phone="(800) 687- 0480" />
                <About />
              </div>
              <PaymentBox>
                <PaymentContainer>
                  <img src="/payment.png" alt="Payment methods accepted" />
                </PaymentContainer>
                <PhoneBtn phone="(800) 687- 0480" />
                <TextBubble />
                <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" alt="Oscar's Lock logo" />
              </PaymentBox>
            </div>
            <MapContainer>
              <OurTeam testimonials={testimonials} />
              <PhoneBtn phone="(800) 687- 0480" />
              <PhotoSlider />
            </MapContainer>
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
  display: flex;
  justify-content: start;
  margin-top: -3.5rem;
  align-items: start;

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
    overflow: hidden;
  }
  @media (min-width: 1280px) and (max-width: 2652px) {
    padding: 0 3rem;
    padding-left: 5rem;
  }
  @media (max-width: 1440px) and (min-width: 768px) {
    width: 100%;
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
