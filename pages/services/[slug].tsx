import React from "react";
import { SharedPageProps } from "../../_app"; 
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Page from "@/components/Page";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from "..";
import TextBubble from "@/components/TextBubble";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import PhoneBtn from "@/components/PhoneBtn";
import { media } from "@/utils/media";
import Cta from "@/views/HomePage/Cta"; 

interface ServiceProps extends SharedPageProps {
  service: any;
}

interface Query {
  [key: string]: string;
}

const ServiceContainer = styled(WhiteBackgroundContainer)`
  padding-top: 0rem;
`;

// --- UPDATED STYLES TO MATCH DOCUMENT ---

const StyledPageTitle = styled.h1`
  font-family: "Times New Roman", serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #0A3161;
  line-height: 1.1;

  ${media("<=tablet")} {
    font-size: 2.4rem;
  }
`;

const StyledPageDescription = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #1e4d8b;
  line-height: 1.3;

  ${media("<=tablet")} {
    font-size: 1.6rem;
  }
`;

const StyledFullText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  line-height: 1.6;
  color: #1e4d8b;

  /* Bold text stays same color */
  strong {
    font-weight: 700;
    color: #1e4d8b;
  }

  /* Section headings */
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #1e4d8b;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: #1e4d8b;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  /* Bullet list styling */
  ul {
    list-style: none;
    padding-left: 0;
    margin: 0.8rem 0;
  }

  li {
    padding-left: 1.8rem;
    position: relative;
    margin-bottom: 1rem;
    color: #1e4d8b;
    line-height: 1.6;
    font-weight: 400;
  }

  li::before {
    content: "●";
    position: absolute;
    left: 0;
    color: #1e4d8b;
    font-weight: 700;
  }

  /* Paragraph spacing - tight like the original */
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  /* First paragraph after heading - no top margin */
  h1 + p, h2 + p, h3 + p {
    margin-top: 0;
  }

  ${media("<=tablet")} {
    font-size: 1.4rem;
  }
`;

const BottomText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  color: #1e4d8b;
  margin-top: 3rem;
  margin-bottom: 4rem;

  ${media("<=tablet")} {
    font-size: 1.8rem;
  }
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
    description: "Lost your car keys? Our on-call automotive locksmith professional will make all keys & remotes on site. We can fix faulty auto ignitions or locks right on the spot.",
    fullText: `<p><strong>Oscars Lock & Key Services can help you quickly duplicate or replace lost, damaged or stolen electronic car keys and key fobs. We make electronic car keys for hundreds of car makes and models. Our locksmiths have the technical training and equipment that is necessary to provide fast and accurate car key duplication and replacement services. Our fully equipped mobile van comes to your location and offers the ultimate in convenience and time savings.</strong></p>
<h3>Keys & Remotes for Most Vehicles, Makes & Models</h3>
<p><strong>Oscars Lock & Key Services</strong> has an extensive stock of base keys, as well as more than 90 auto transponder keys for nearly 200 vehicle models, including cars, vans and trucks. Please call us with any questions regarding your specific vehicle make and model.</p>
<h2>Car Key Replacement & Duplication Services</h2>
<h3>Oscars Lock & Key Services offers the following automotive key services:</h3>
<ul>
<li><strong>Transponder (remote and key FOB) replacement</strong></li>
<li><strong>Transponder chip repair, duplication, and replacement</strong></li>
<li><strong>Smart and Flip Blade key repair or replacement</strong></li>
<li><strong>VIN key copying</strong></li>
<li><strong>PROX Car Key duplication and replacement</strong></li>
<li><strong>Immobilizer key reprogramming</strong></li>
<li><strong>Car remote programming</strong></li>
<li><strong>Ignition switch repair and unlocking</strong></li>
<li><strong>Broken key removal</strong></li>
<li><strong>Car trunk opening</strong></li>
<li><strong>High Security Car Key Cutting</strong></li>
</ul>`,
  },
  residential: {
    title: "Residential",
    heroImage: "/service-bg/residential.png", 
    slug: { current: "residential" }, 
    description: "Ensuring the security of your home is a top priority",
    fullText: `<p><strong>Oscars Lock & key Services provides a comprehensive range of residential locksmith services. Our highly skilled licensed locksmith professionals can resolve your locksmith service needs.</strong></p>
<p>With the support of qualified locksmiths, you can make right decisions and maximize the effectiveness of your security investments. We provide services which include fixing broken locks, installing new hardware, replacing lost keys or making your existing locks work with a different key and a master key.</p>
<h3>Common residential lock and key issues we can help you with include:</h3>
<ul>
<li><strong>Home Lockout Service</strong> – <strong>Oscars Lock & key Services</strong> will quickly dispatch an experienced licensed locksmith professional to your home to address the issue.</li>
<li><strong>Lock Installation, Replacement, and Repair</strong> – We carry a wide range of locks, deadbolts and keys to ensure we're able to provide you with the best products and services when locks break or need to be replaced.</li>
<li><strong>Lock Rekeying</strong> – Rekeying is an essential service offered by <strong>Oscars Lock & Key Services</strong> that often goes overlooked. It involves changing the internal lock mechanism so that previous keys no longer work and new keys are required for access. Rekeying offers an affordable and efficient alternative to lock replacement and is particularly useful when keys are lost or stolen, or unauthorized access is suspected.</li>
<li><strong>A master Key System</strong> – A Master key system allows your access to multiple locks using a single key, while individual keys only open specific locks.</li>
<li><strong>High-Security Locks & Deadbolts</strong> – A high-security lock with key control adds an increased level of safety to your home by reducing the chance that your house key can be duplicated in an unauthorized fashion.</li>
</ul>
<h3>We are committed to providing an unmatched level of service to our customers, please ask us about our Price Match Guarantee.</h3>`,
  },
  commercial: {
    title: "Commercial",
    heroImage: "/service-bg/commercial.png", 
    slug: { current: "commercial" }, 
    description: "Commercial Locksmith Services & Products",
    fullText: `<p><strong>Business security is a top priority for any organization. Oscars Lock & Key Services provides a wide range of commercial high-security locks, including un-pickable, do-not-duplicate, push and panic bars.</strong></p>
<h3>Commercial Service Offerings:</h3>
<ul>
<li><strong>High-security deadbolts, locks and key control systems</strong></li>
<li><strong>Lock repair, rekeying, replacement and installation</strong></li>
<li><strong>Master Key Systems</strong></li>
<li><strong>Keyless entry systems</strong></li>
<li><strong>Key duplication and replacement</strong></li>
<li><strong>Key extraction</strong></li>
<li><strong>Door lever locks, closers and hinge installation and repair</strong></li>
<li><strong>Door viewers and guards</strong></li>
<li><strong>Exit devices</strong></li>
<li><strong>File cabinet locks, locking bars and key replacement</strong></li>
<li><strong>Showcase, desk and cabinet lock installation, repair and replacement</strong></li>
</ul>`,
  },
  emergency: {
    title: "Emergency",
    heroImage: "/service-bg/emergency.png", 
    slug: { current: "emergency" }, 
    description: "Quick and Reliable Emergency Locksmith Service",
    fullText: `<h2>Locked Out? We've Got the Key to Your Solution!</h2>
<p><strong>Wе knоw hоw ѕtrеѕѕful it is to be lосkеd оut оf уоur home, break or lose your ignition kеу. Wе саn handle аnу tуре оf emergency lосkѕmіth situation.</strong></p>
<p>Our experienced locksmith company like <strong>Oscars Lock & Key Services</strong> offers emergency lockout services, ensuring that you can regain access quickly and efficiently.</p>
<p>Our team of professionals operates to minimize damage to your property, by using non-destructive techniques and tools.</p>
<h2>Wе оffеr the following emergency locksmith ѕеrvісеѕ:</h2>
<h3>Emergency Lосkоut Sеrvісеѕ for Hоmеѕ, Commercial Buildings, and Vеhісlеѕ</h3>
<h3>Lосk Changes аnd Rераіr</h3>
<h3>Re-Keying</h3>
<h3>Kеуlеѕѕ Entry Systems</h3>
<h3>Master Kеу Sуѕtеmѕ</h3>
<h3>Pаnіс Bаr Rераіr аnd Installation</h3>
<h3>Aссеѕѕ Cоntrоl Sуѕtеmѕ</h3>
<p>Yоu саn соunt оn <strong>Oscars Lock & Key Services</strong> to get the job dоnе ԛuісklу and еffісіеntlу, and we оffеr the mоѕt competitive rates with a price match guarantee.</p>`,
  },
  mailbox: {
    title: "Mailbox",
    heroImage: "/service-bg/mailbox.png", 
    slug: { current: "mailbox" }, 
    description: "Mailbox lock replacement and key services",
    fullText: `<p>We have changed many mailbox locks for our customers.</p>
<p><strong>We offer fully trained locksmith technicians who have every mailbox lock in stock at all times - so you never have to wait!</strong></p>
<p>Mailboxes are an easy target to break into. Here is why you should protect your mailbox. It's no secret though that identity fraud has become rife in recent years and one of the easiest ways to get the important data is through mail!</p>
<p>Low cost options are available to increase the security of your mailbox to prevent theft that could lead to something much more costly and serious!</p>`,
  },
  safe: {
    title: "Safe",
    heroImage: "/service-bg/safe.png", 
    slug: { current: "safe" }, 
    description: "Safe opening, repair, and installation",
    fullText: `<p><strong>Having issues with your safe?</strong></p>
<p><strong>We are expert safe locksmiths!</strong></p>
<p>We have tools and techniques. No matter how complicated a situation you might have!</p>
<p>Our technicians are highly trained and have years of experience.</p>
<p>We have worked with many different types of safe locks and know every method to getting your safe opened.</p>
<p>When the technician sees your safe, he determines the best method to gain entry.</p>`,
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

  const isExcludedPage = ['gallery', 'coupons', 'coupon'].includes(service.slug.current);

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
               <button 
                 onClick={() => router.push("/")} 
                 className="mb-10 px-6 md:px-10 py-4 bg-[#0a3161] text-white text-2xl rounded-lg shadow-md hover:bg-[#15233e] transition-all transform hover:scale-105 font-bold flex items-center font-serif"
               >
                 Home
               </button>
               
               <StyledPageTitle>{service.title}</StyledPageTitle>
               <StyledPageDescription>{service.description}</StyledPageDescription>
               
               <StyledFullText dangerouslySetInnerHTML={{ __html: service.fullText }} />

               {/* --- CTA COMPONENT (TOP HEADLINE ONLY) --- */}
               {!isExcludedPage && (
                 <div style={{ marginBottom: '10px', marginTop: '40px' }}>
                   <Cta />
                 </div>
               )}
               {/* ---------------------------------- */}

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
        
        {/* BUTTON */}
        <button 
          onClick={() => router.push("/coupons")} 
          className="bg-[#751318] text-xl md:text-2xl px-8 md:px-32 py-3 text-white mx-auto block mt-8 hover:bg-[#5e0a0a] transition-colors font-bold rounded-md shadow-md font-serif w-11/12 md:w-auto"
        >
          FOR COUPONS CLICK HERE
        </button>

        {/* --- BOTTOM TEXT (AFTER BUTTON - LARGE SIZE) --- */}
        {!isExcludedPage && (
          <BottomText>
            Don't Wait, Reach Out To Oscars Lock & Key Services!
          </BottomText>
        )}
        {/* -------------------------------- */}

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
