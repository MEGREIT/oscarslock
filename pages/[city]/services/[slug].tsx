import React from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Page from "@/components/Page";
import TextBubble from "@/components/TextBubble";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import PhoneBtn from "@/components/PhoneBtn";
import { media } from "@/utils/media";
import Cta from "@/views/HomePage/Cta"; 
import { getCityPhone } from "@/utils/getCityPhone"; 
import cityData from "@/utils/cities_data.json";

// --- INTERFACES ---
interface ServiceProps {
  service: any;
  phone: string; 
  navbarTitle: string;
}

// --- LOCAL STYLES (To avoid import issues) ---
const WhiteBackgroundContainer = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 10rem;
  padding-top: 0rem; /* Adjusted for Service Page */
  & > *:not(:first-child) { margin-top: 3rem; }
  ${media("<=phone")} { padding: 0 0; }
  ${media(">largeDesktop")} { align-items: center; margin: 0 auto; }
  @media (min-width: 1440px) { width: 100vw; margin: 0 auto; }
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
  margin: 0 0;
  ${media(">=largeDesktop")} { width: 30%; }
  ${media("<=phone")} { margin: 0 2rem; }
`;

const ServiceContainer = styled(WhiteBackgroundContainer)`
  padding-top: 0rem;
`;

const StyledPageTitle = styled.h1`
  font-family: "Times New Roman", serif;
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #0A3161;
  line-height: 1.1;

  ${media("<=tablet")} {
    font-size: 3.6rem;
  }
`;

const StyledPageDescription = styled.p`
  font-family: "Times New Roman", serif;
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #0A3161;
  opacity: 0.9;

  ${media("<=tablet")} {
    font-size: 2rem;
  }
`;

const StyledFullText = styled.div`
  font-family: "Times New Roman", serif;
  font-size: 2rem;
  line-height: 1.8;
  color: #0A3161;
  white-space: pre-line;

  ${media("<=tablet")} {
    font-size: 1.8rem;
  }
`;

const BottomText = styled.p`
   font-family: "Times New Roman", serif;
   font-size: 2.8rem; 
   font-weight: 700;
   text-align: center;
   color: #0A3161; 
   margin-top: 3rem; 
   margin-bottom: 4rem; 

   ${media("<=tablet")} {
    font-size: 2rem;
  }
`;

const PriceListContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
  width: 100%;
  border: 2px solid #0A3161;
  padding: 2rem;
  border-radius: 8px;
`;

const PriceTitle = styled.h3`
  font-family: "Times New Roman", serif;
  font-size: 3rem;
  font-weight: 700;
  color: #0A3161;
  text-align: center;
  margin-bottom: 2rem;
  text-decoration: underline;
`;

const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Times New Roman", serif;
  font-size: 2rem;
  color: #0A3161;
  padding: 0.5rem 0;
  border-bottom: 1px dotted #ccc;
  &:last-child { border-bottom: none; }
  ${media("<=tablet")} { font-size: 1.6rem; }
`;

const Disclaimer = styled.p`
  font-family: "Times New Roman", serif;
  font-size: 1.4rem;
  color: #555;
  margin-top: 2rem;
  font-style: italic;
  line-height: 1.4;
`;

// --- DATA ---
const STATIC_SERVICES_DATA: Record<string, any> = {
  automotive: {
    title: "Automotive",
    heroImage: "/service-bg/automotive.png", 
    slug: { current: "automotive" }, 
    description: "Car key replacement and lockout services.",
    fullText: `Lost your car keys? Our on-call automotive locksmith professional will make all keys & remotes on site. We can fix faulty auto ignitions or locks right on the spot.\n\nOscars Lock & Key Services can help you quickly duplicate or replace lost, damaged or stolen electronic car keys and key fobs. We make electronic car keys for hundreds of car makes and models.\n\nOscars Lock & Key Services offers the following automotive key services:\n●Transponder (remote and key FOB) replacement\n●Transponder chip repair, duplication, and replacement\n●Smart and Flip Blade key repair or replacement\n●VIN key copying\n●PROX Car Key duplication and replacement\n●Immobilizer key reprogramming\n●Car remote programming\n●Ignition switch repair and unlocking\n●Broken key removal\n●Car trunk opening\n●High Security Car Key Cutting`,
  },
  residential: {
    title: "Residential",
    heroImage: "/service-bg/residential.png", 
    slug: { current: "residential" }, 
    description: "Complete residential locksmith services for your home security.",
    fullText: `Ensuring the security of your home is a top priority\n\nOscars Lock & key Services provides a comprehensive range of residential locksmith services. Our highly skilled licensed locksmith professionals can resolve your locksmith service needs.\n\nCommon residential lock and key issues we can help you with include:\n●Home Lockout Service\n●Lock Installation, Replacement, and Repair\n●Lock Rekeying\n●A master Key System\n●High-Security Locks & Deadbolts\n\nWe are committed to providing an unmatched level of service to our customers, please ask us about our Price Match Guarantee.`,
  },
  commercial: {
    title: "Commercial",
    heroImage: "/service-bg/commercial.png", 
    slug: { current: "commercial" }, 
    description: "Professional security solutions for businesses and offices.",
    fullText: `Commercial Locksmith Services & Products\n\nBusiness security is a top priority for any organization. Oscars Lock & Key Services provides a wide range of commercial high-security locks, including un-pickable, do-not-duplicate, push and panic bars.\n\nCommercial Service Offerings:\n●High-security deadbolts, locks and key control systems\n●Lock repair, rekeying, replacement and installation\n●Master Key Systems\n●Keyless entry systems\n●Key duplication and replacement\n●Key extraction\n●Door lever locks, closers and hinge installation and repair\n●Door viewers and guards\n●Exit devices\n●File cabinet locks, locking bars and key replacement\n●Showcase, desk and cabinet lock installation, repair and replacement`,
  },
  emergency: {
    title: "Emergency",
    heroImage: "/service-bg/emergency.png", 
    slug: { current: "emergency" }, 
    description: "24/7 Emergency assistance for lockouts.",
    fullText: `Quick and Reliable Emergency Locksmith Service\n\nLocked Out? We’ve Got the Key to Your Solution!\n\nWе knоw hоw ѕtrеѕѕful it is to be lосkеd оut оf уоur home, break or lose your ignition kеу.Wе саn handle аnу tуре оf emergency lосkѕmіth situation.\n\nOur experienced locksmith company like Oscars Lock & Key Services offers 24/7 emergency lockout services, ensuring that you can regain access quickly and efficiently.\n\nWе оffеr the following emergency locksmith ѕеrvісеѕ:\n●Emergency Lосkоut Sеrvісеѕ for Hоmеѕ, Commercial Buildings, and Vеhісlеѕ\n●Lосk Changes аnd Rераіr\n●Re-Keying\n●Kеуlеѕѕ Entry Systems\n●Master Kеу Sуѕtеmѕ\n●Pаnіс Bаr Rераіr аnd Installation\n●Aссеѕѕ Cоntrоl Sуѕtеmѕ`,
  },
  mailbox: {
    title: "Mailbox",
    heroImage: "/service-bg/mailbox.png", 
    slug: { current: "mailbox" }, 
    description: "Mailbox lock replacement and key services.",
    fullText: `We have changed many mailbox locks for our customers.\n\nWe offer fully trained locksmith technicians who have every mailbox lock in stock at all times - so you never have to wait!\n\nMailboxes are an easy target to break into. Here is why you should protect your mailbox. It’s no secret though that identity fraud has become rife in recent years and one of the easiest ways to get the important data is through mail!`,
  },
  safe: {
    title: "Safe",
    heroImage: "/service-bg/safe.png", 
    slug: { current: "safe" }, 
    description: "Safe opening, repair, and installation.",
    fullText: `Having issues with your safe? We are expert safe locksmiths!\n\nWe have tools and techniques. No matter how complicated a situation you might have!\nOscars Lock & Key Services technicians are highly trained and have years of experience.\n\nWe have worked with many different types of safe locks and know every method to getting your safe opened.`,
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

// --- COMPONENT ---
export default function ServiceSlugRoute(props: ServiceProps) {
  const router = useRouter();
  const { service, phone, navbarTitle } = props; // DESTRUCTURE PROPS
   
  if (router.isFallback) return <div>Loading...</div>;
  if (!service) return <div>Loading...</div>;

  const isExcludedPage = ['gallery', 'coupons', 'coupon'].includes(service.slug.current);

  // Smart Home Link logic
  const citySlug = router.query.city as string;
  const homeLink = citySlug ? `/${citySlug}` : "/";

  return (
    <Page
      title={service.title}
      description={service.description}
      isService
      imgURL={service.heroImage}
      // PASS DATA TO NAVBAR (via Page -> Layout)
      phone={phone}
      navbarTitle={navbarTitle}
    >
      <ServiceContainer>
        {/* Pass Phone to Body Button */}
        <PhoneBtn phone={phone} />
        
        <div className="lg:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 md:space-y-0 space-y-2 lg:space-y-0 max-w-[1250px]">
          <div className="flex-1 pr-0 md:pr-8">
             <div className="mb-8">
               <button 
                 onClick={() => router.push(homeLink)} 
                 className="mb-10 px-6 md:px-10 py-4 bg-[#0a3161] text-white text-2xl rounded-lg shadow-md hover:bg-[#15233e] transition-all transform hover:scale-105 font-bold flex items-center font-serif"
               >
                 ← Home
               </button>
               
               <StyledPageTitle>{service.title}</StyledPageTitle>
               <StyledPageDescription>{service.description}</StyledPageDescription>
               
               <StyledFullText>
                 {service.fullText}
               </StyledFullText>

               {/* CTA */}
               {!isExcludedPage && (
                 <div style={{ marginBottom: '10px', marginTop: '40px' }}>
                   <Cta />
                 </div>
               )}
               
               {/* PRICE LIST */}
               {!isExcludedPage && (
                 <PriceListContainer>
                   <PriceTitle>The Most Popular Services</PriceTitle>
                   <PriceItem><span>Service call</span><span>$35</span></PriceItem>
                   <PriceItem><span>Lockout Service</span><span>$65-$195</span></PriceItem>
                   <PriceItem><span>Lock Change</span><span>$45-$65</span></PriceItem>
                   <PriceItem><span>Lock Rekey</span><span>$25-$45</span></PriceItem>
                   <PriceItem><span>Lock Repair</span><span>$55-$145</span></PriceItem>
                   <PriceItem><span>Hole Cut-Out For New Locks</span><span>$85-$125</span></PriceItem>
                   <PriceItem><span>Safe Opening</span><span>$155-$395</span></PriceItem>
                   <PriceItem><span>Car key (Non-Transponder)</span><span>$155-$205</span></PriceItem>
                   <PriceItem><span>Car key (Transponder)</span><span>$205-$275</span></PriceItem>
                   <PriceItem><span>Car Key (Smart / Prox)</span><span>$285-$465</span></PriceItem>
                   
                   <Disclaimer>
                     * Please take into notice that our dispatch team can only give an estimate of the cost for the task...
                   </Disclaimer>
                 </PriceListContainer>
               )}

             </div>
          </div>
          <PaymentBox>
            <PaymentContainer><img src="/payment.png" alt="Accepted Payments" /></PaymentContainer>
            <PhoneBtn phone={phone} />
            <TextBubble />
            <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" alt="Logo" />
          </PaymentBox>
        </div>

        <ServiceCTA />
        <PhoneBtn phone={phone} />
        
        <button 
          onClick={() => router.push("/coupons")} 
          className="bg-[#751318] text-xl md:text-2xl px-8 md:px-32 py-3 text-white mx-auto block mt-8 hover:bg-[#5e0a0a] transition-colors font-bold rounded-md shadow-md font-serif w-11/12 md:w-auto"
        >
          FOR COUPONS CLICK HERE
        </button>

        {!isExcludedPage && (
          <BottomText>
            Don't Wait, Reach Out To Oscars Lock & Key Services!
          </BottomText>
        )}

      </ServiceContainer>
    </Page>
  );
}

// --- SERVER SIDE PROPS ---
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const slug = params.slug as string;
  const city = params.city as string; 
  const service = STATIC_SERVICES_DATA[slug];

  // --- 1. SERVER SIDE PHONE & CITY TITLE LOGIC ---
  let phone = "(800) 687- 0480";
  let navbarTitle = "Need a Local Locksmith?"; 

  if (city) {
    try {
      // Get Phone
      const cityPhone = getCityPhone(city);
      if (cityPhone) {
        phone = cityPhone;
      }
      
      // Get Navbar Title (City + State)
      // We look for the "city" field which looks like "Cambridge MA"
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
  // ------------------------------------------
   
  if (service) {
    return { props: { service, phone, navbarTitle } };
  }

  // Fallback to residential if slug invalid
  return { 
    props: { 
      service: STATIC_SERVICES_DATA['residential'], 
      phone,
      navbarTitle 
    } 
  };
};
