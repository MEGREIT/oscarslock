import React from "react";
import { SharedPageProps } from "../../_app"; 
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import ServicesGrid from "@/components/ServicesGrid";
import Page from "@/components/Page";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from "..";
import TextBubble from "@/components/TextBubble";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import PhoneBtn from "@/components/PhoneBtn";

interface ServiceProps extends SharedPageProps {
  service: any;
}

interface Query {
  [key: string]: string;
}

const ServiceContainer = styled(WhiteBackgroundContainer)`
  padding-top: 0rem;
`;

const STATIC_SERVICES_LIST = [
  { title: "Residential", slug: { current: "residential" } },
  { title: "Commercial", slug: { current: "commercial" } },
  { title: "Automotive", slug: { current: "automotive" } },
  { title: "Emergency", slug: { current: "emergency" } },
  { title: "Mailbox", slug: { current: "mailbox" } },
  { title: "Safe", slug: { current: "safe" } },
  { title: "Gallery", slug: { current: "gallery" } },
  { title: "Coupons", slug: { current: "coupons" } },
];

const STATIC_SERVICES_DATA: Record<string, any> = {
  residential: {
    title: "Residential",
    heroImage: "/service-bg/residential.png", 
    slug: { current: "residential" }, 
    description: "Complete residential locksmith services for your home security.",
    fullText: "We provide comprehensive residential locksmith services including lockouts, rekeying, and lock installation to keep your home safe. Our expert technicians are available to ensure your family's security with high-quality locks and precision installation.",
  },
  commercial: {
    title: "Commercial",
    heroImage: "/service-bg/commercial.png", 
    slug: { current: "commercial" }, 
    description: "Professional security solutions for businesses and offices.",
    fullText: "Our commercial services ensure your business is secure with high-security locks, master key systems, and access control. We understand the unique security needs of businesses and offer tailored solutions to protect your assets.",
  },
  automotive: {
    title: "Automotive",
    heroImage: "/service-bg/automotive.png", 
    slug: { current: "automotive" }, 
    description: "Car key replacement and lockout services.",
    fullText: "Locked out of your car? We offer fast automotive locksmith services including key fob programming, ignition repair, and emergency car door unlocking. We work with most makes and models to get you back on the road quickly.",
  },
  emergency: {
    title: "Emergency",
    heroImage: "/service-bg/emergency.png", 
    slug: { current: "emergency" }, 
    description: "24/7 Emergency assistance for lockouts.",
    fullText: "Available 24/7 for all your emergency locksmith needs. Whether you are locked out of your home, car, or office, our rapid response team is ready to help you anytime, day or night.",
  },
  mailbox: {
    title: "Mailbox",
    heroImage: "/service-bg/mailbox.png", 
    slug: { current: "mailbox" }, 
    description: "Mailbox lock replacement and key services.",
    fullText: "Secure your mail with our mailbox lock replacement services. If you've lost your mailbox key or the lock is damaged, we can quickly replace it to ensure your private mail stays safe.",
  },
  safe: {
    title: "Safe",
    heroImage: "/service-bg/safe.png", 
    slug: { current: "safe" }, 
    description: "Safe opening, repair, and installation.",
    fullText: "Expert safe opening and repair services for your valuables. We can help with forgotten combinations, malfunctioning digital locks, and professional installation of new safes.",
  },
  coupons: {
    title: "Coupons",
    heroImage: "/service/coupons.png", 
    slug: { current: "coupons" }, 
    description: "Discount coupons for locksmith services.",
    fullText: "Check here for our latest offers and discounts. We strive to provide affordable locksmith services without compromising on quality.",
  },
  gallery: {
    title: "Gallery",
    heroImage: "/service/images-regular.svg", 
    slug: { current: "gallery" }, 
    description: "Our work gallery.",
    fullText: "Browse photos of our recent work and see the quality of our craftsmanship.",
  }
};

export default function ServiceSlugRoute(props: ServiceProps) {
  const router = useRouter();
  const { service } = props;
  
  if (router.isFallback) return <div>Loading...</div>;
  if (!service) return <div>Loading...</div>;

  return (
    <Page
      title={service.title}
      description={service.description}
      isService
      imgURL={service.heroImage}
    >
      <ServiceContainer>
        <PhoneBtn phone="(800) 687- 0480" />
        <div className="lg:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 md:space-y-0 space-y-2 lg:space-y-0 max-w-[1250px]">
          <div className="flex-1 pr-0 md:pr-8">
             <div className="mb-8">
               {/* --- BACK BUTTON (Main Page) --- */}
               <button 
                 onClick={() => router.push("/")} 
                 className="mb-6 px-6 py-2 bg-[#0a3161] text-white rounded hover:bg-[#15233e] transition-colors font-bold flex items-center"
               >
                 ← Back to Home
               </button>
               {/* ----------------------------- */}
               
               <h1 className="text-4xl font-bold mb-4 text-[#15233e]">{service.title}</h1>
               <p className="text-xl font-semibold mb-4 text-gray-700">{service.description}</p>
               <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                 {service.fullText}
               </p>
             </div>
             <div className="mt-8">
                <ServicesGrid services={STATIC_SERVICES_LIST} />
             </div>
          </div>
          <PaymentBox>
            <PaymentContainer><img src="/payment.png" alt="Accepted Payments" /></PaymentContainer>
            <PhoneBtn phone="(800) 687- 0480" />
            <TextBubble />
            <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" alt="Logo" />
          </PaymentBox>
        </div>
        <ServiceCTA />
        <PhoneBtn phone="(800) 687- 0480" />
        <button onClick={() => router.push("/coupons")} className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto block mt-8 hover:bg-[#5e0a0a] transition-colors">
          FOR COUPONS CLICK HERE
        </button>
      </ServiceContainer>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<ServiceProps, Query> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  const slug = params.slug as string;
  const service = STATIC_SERVICES_DATA[slug];
  
  if (service) {
    return { props: { service, draftMode, token: "" } };
  }

  return { 
    props: { 
      service: STATIC_SERVICES_DATA['residential'], 
      draftMode, 
      token: "" 
    } 
  };
};
