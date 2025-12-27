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
  automotive: {
    title: "Automotive",
    heroImage: "/service-bg/automotive.png", 
    slug: { current: "automotive" }, 
    description: "Car key replacement and lockout services.",
    fullText: `Lost your car keys? Our on-call automotive locksmith professional will make all keys & remotes on site. We can fix faulty auto ignitions or locks right on the spot.

Oscar’s Lock & Key Services can help you quickly duplicate or replace lost, damaged or stolen electronic car keys and key fobs. We make electronic car keys for hundreds of car makes and models. Our locksmiths have the technical training and equipment that is necessary to provide fast and accurate car key duplication and replacement services. Our fully equipped mobile van comes to your location and offers the ultimate in convenience and time savings.

Keys & Remotes for Most Vehicles, Makes & Models
Oscar’s Lock & Key Services has an extensive stock of base keys, as well as more than 90 auto transponder keys for nearly 200 vehicle models, including cars, vans and trucks. Please call us with any questions regarding your specific vehicle make and model.
Car Key Replacement & Duplication Services

Oscar’s Lock & Key Services offers the following automotive key services:

●Transponder (remote and key FOB) replacement
●Transponder chip repair, duplication, and replacement
●Smart and Flip Blade key repair or replacement
●VIN key copying
●PROX Car Key duplication and replacement
●Immobilizer key reprogramming
●Car remote programming
●Ignition switch repair and unlocking
●Broken key removal
●Car trunk opening
●High Security Car Key Cutting`,
  },
  residential: {
    title: "Residential",
    heroImage: "/service-bg/residential.png", 
    slug: { current: "residential" }, 
    description: "Complete residential locksmith services for your home security.",
    fullText: `Ensuring the security of your home is a top priority

Oscar’s Lock & key Services provides a comprehensive range of residential locksmith services. Our highly skilled licensed locksmith professionals can resolve your locksmith service needs.

With the support of qualified locksmiths, you can make right decisions and maximize the effectiveness of your security investments. We provide services which include fixing broken locks, installing new hardware, replacing lost keys or making your existing locks work with a different key and a master key.

Common residential lock and key issues we can help you with include:

●Home Lockout Service – Oscar’s Lock & key Services will quickly dispatch an experienced licensed locksmith professional to your home to address the issue.
●Lock Installation, Replacement, and Repair – We carry a wide range of locks, deadbolts and keys to ensure we're able to provide you with the best products and services when locks break or need to be replaced.
●Lock Rekeying – Rekeying is an essential service offered by Oscar’s Lock & Key Services that often goes overlooked. It involves changing the internal lock mechanism so that previous keys no longer work and new keys are required for access. Rekeying offers an affordable and efficient alternative to lock replacement and is particularly useful when keys are lost or stolen,or unauthorized access is suspected.
●A master Key System – A Master key system allows your access to multiple locks using a single key, while individual keys only open specific locks.
●High-Security Locks & Deadbolts – A high-security lock with key control adds an increased level of safety to your home by reducing the chance that your house key can be duplicated in an unauthorized fashion.

We are committed to providing an unmatched level of service to our customers, please ask us about our Price Match Guarantee.`,
  },
  commercial: {
    title: "Commercial",
    heroImage: "/service-bg/commercial.png", 
    slug: { current: "commercial" }, 
    description: "Professional security solutions for businesses and offices.",
    fullText: `Commercial Locksmith Services & Products

Business security is a top priority for any organization. Oscar’s Lock & Key Services provides a wide range of commercial high-security locks, including un-pickable, do-not-duplicate, push and panic bars.

Commercial Service Offerings:

●High-security deadbolts, locks and key control systems
●Lock repair, rekeying, replacement and installation
●Master Key Systems
●Keyless entry systems
●Key duplication and replacement
●Key extraction
●Door lever locks, closers and hinge installation and repair
●Door viewers and guards
●Exit devices
●File cabinet locks, locking bars and key replacement
●Showcase, desk and cabinet lock installation, repair and replacement`,
  },
  emergency: {
    title: "Emergency",
    heroImage: "/service-bg/emergency.png", 
    slug: { current: "emergency" }, 
    description: "24/7 Emergency assistance for lockouts.",
    fullText: `Quick and Reliable Emergency Locksmith Service

Locked Out? We’ve Got the Key to Your Solution!

Wе knоw hоw ѕtrеѕѕful it is to be lосkеd оut оf уоur home, break or lose your ignition kеу.Wе саn handle аnу tуре оf emergency lосkѕmіth situation.

Our experienced locksmith company like Oscar’s Lock & Key Services offers 24/7 emergency lockout services, ensuring that you can regain access quickly and efficiently.

Our team of professionals operates to minimize damage to your property, by using non-destructive techniques and tools.

Wе оffеr the following emergency locksmith ѕеrvісеѕ:

●Emergency Lосkоut Sеrvісеѕ for Hоmеѕ, Commercial Buildings, and Vеhісlеѕ
●Lосk Changes аnd Rераіr
●Re-Keying
●Kеуlеѕѕ Entry Systems
●Master Kеу Sуѕtеmѕ
●Pаnіс Bаr Rераіr аnd Installation
●Aссеѕѕ Cоntrоl Sуѕtеmѕ


Yоu саn соunt оn Oscar’s Lock & Key Services to get the job dоnе ԛuісklу and еffісіеntlу, and we оffеr the mоѕt competitive rates with a price match guarantee.`,
  },
  mailbox: {
    title: "Mailbox",
    heroImage: "/service-bg/mailbox.png", 
    slug: { current: "mailbox" }, 
    description: "Mailbox lock replacement and key services.",
    fullText: `We have changed many mailbox locks for our customers.

We offer fully trained locksmith technicians who have every mailbox lock in stock at all times - so you never have to wait!

Mailboxes are an easy target to break into. Here is why you should protect your mailbox. It’s no secret though that identity fraud has become rife in recent years and one of the easiest ways to get the important data is through mail!

Low cost options are available to increase the security of your mailbox to prevent theft that could lead to something much more costly and serious!`,
  },
  safe: {
    title: "Safe",
    heroImage: "/service-bg/safe.png", 
    slug: { current: "safe" }, 
    description: "Safe opening, repair, and installation.",
    fullText: `Having issues with your safe? 

We are expert safe locksmiths! 

We have tools and techniques. No matter how complicated a situation you might have!
Oscar’s Lock & Key Services technicians are highly trained and have years of experience.

We have worked with many different types of safe locks and know every method to getting your safe opened.

When the technician sees your safe, he determines the best method to gain entry.`,
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

  const isCouponsPage = service.slug.current === 'coupons';

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
               {/* Back Button */}
               <button 
                 onClick={() => router.push("/")} 
                 className="mb-6 px-6 py-2 bg-[#0a3161] text-white rounded hover:bg-[#15233e] transition-colors font-bold flex items-center"
               >
                 Home
               </button>
               
               <h1 className="text-4xl font-bold mb-4 text-[#15233e]">{service.title}</h1>
               <p className="text-3xl font-semibold mb-4 text-gray-700">{service.description}</p>
               
               {/* --- TEXT SIZE INCREASED TO 4XL (HUGE) --- */}
               <p className="text-4xl text-gray-800 leading-relaxed whitespace-pre-line">
                 {service.fullText}
               </p>
               {/* -------------------------------------- */}

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
        
        {!isCouponsPage && (
          <h2 className="text-3xl font-bold text-center text-[#0a3161] mt-12 px-4">
            Take a Look At Our Coupons - You Might Qualify For a Discount!
          </h2>
        )}

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
