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
import "../style.css";
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
import PostBody from "@/components/PostBody";
import { useRouter } from "next/router";
import About from "@/components/About";
import { media } from "@/utils/media";
import ServicesGrid from "@/components/ServicesGrid";
import TextBubble from "@/components/TextBubble";
import PhotoSlider from "@/components/PhotoSlider";
import CityServicesGrid from "@/components/CityServicesGrid";
import cityData from "@/utils/cities_data.json";
import { sortBySlug } from "..";
import GoogleScript from "@/components/Script";
import { useEffect, useState } from "react";
import { formatPrettyPhone, getCityPhone } from "@/utils/getCityPhone";
import PhoneBtn from "@/components/PhoneBtn";

const client = getClient();

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
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="description" content="" />
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
        <Slider phone={phone} />
        <WhiteBackgroundContainer>
          <div className="flex flex-col items-center">
            <div className="lg:flex xl:align-top lg:space-x-4  space-y-2 lg:space-y-0 justify-center align-middle mx-0">
              <div className="flex flex-col mx-0 w-auto 2xl:max-w-[65%] xl:max-w-[80%]">
                <CityServicesGrid services={sortBySlug(services)} slug={slug} />
                {phone && <PhoneBtn phone={phone} />}
                <About />
              </div>

              <PaymentBox>
                <PaymentContainer>
                  <img src="/payment.png" />
                </PaymentContainer>
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
            {/* <MapContainer>
              
            </MapContainer> */}
          </div>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <button
            onClick={() => {
              router.push(`/${slug}/coupons`);
            }}
            className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto"
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
    width: 1506px;
    /* width: 90vw; */
    /* padding-left: 5rem; */
    /* margin: 0 auto; */
  }
`;

export async function getServerSideProps(ctx: any) {
  const { draftMode = false, params = {} } = ctx;
  const slug = params.city;
  let isPresent = false;
  if (
    slug === "privacy-policy" ||
    slug === "terms-conditions" ||
    slug === "price" ||
    slug === "gallery" ||
    slug === "services" ||
    slug === "safe" ||
    slug === "commercial" ||
    slug === "mailbox" ||
    slug === "emergency" ||
    slug === "residential" ||
    slug === "coupons" ||
    slug === "lock-repair" ||
    slug === "automotive"
  ) {
    return {
      props: {
        slug,
        posts: await getAllPosts(client),
        services: await getAllServices(client),
        testimonials: await getAllTestimonials(client),
      },
    };
  }
  cityData.hcms_cities.filter((city) => {
    if (city.subdomain === slug) {
      isPresent = true;
    }
  });
  if (!isPresent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
      posts: await getAllPosts(client),
      services: await getAllServices(client),
      testimonials: await getAllTestimonials(client),
    },
  };
}
