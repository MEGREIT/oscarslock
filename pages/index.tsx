import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import styled from "styled-components";
import Cta from "views/HomePage/Cta";
import Slider from "components/Slider";
import "./style.css";
import OurTeam from "@/views/AboutPage/OurTeam";
import { useRouter } from "next/router";
import About from "@/components/About";
import { media } from "@/utils/media";
import TextBubble from "@/components/TextBubble";
import PhotoSlider from "@/components/PhotoSlider";
import PhoneBtn from "@/components/PhoneBtn";
import ServicesGrid from "@/components/ServicesGrid";
import GoogleScript from "@/components/Script";

// --- THE FINAL, FORCED LIST (Exact Order of Icons) ---
const STATIC_SERVICES = [
  { title: "Residential", slug: { current: "residential" } }, // 1. House Icon
  { title: "Commercial", slug: { current: "commercial" } },   // 2. Building Icon
  { title: "Automotive", slug: { current: "automotive" } },   // 3. Car Icon
  { title: "Emergency", slug: { current: "emergency" } },     // 4. Clock Icon
  { title: "Mailbox", slug: { current: "mailbox" } },         // 5. Envelope Icon
  { title: "Safe", slug: { current: "safe" } },               // 6. Lock Icon
  { title: "Gallery", slug: { current: "gallery" } },         // 7. Photo Icon
  { title: "Coupons", slug: { current: "coupons" } },         // 8. Ticket Icon
];

// --- RESTORED REVIEWS (Hardcoded so they always show up) ---
const STATIC_TESTIMONIALS = [
  { 
    fullName: "Jennifer M.", 
    rating: 5, 
    testimonial: "Oscar's Lock & Key saved the day! I was locked out of my car with my groceries melting in the heat. They arrived in 20 minutes and got me back on the road instantly. Highly recommended!" 
  },
  { 
    fullName: "David R.", 
    rating: 5, 
    testimonial: "Very professional service. We needed to rekey our entire office building after a security concern. The team was efficient, polite, and gave us a great price. Will definitely use them again." 
  },
  { 
    fullName: "Sarah Jenkins", 
    rating: 5, 
    testimonial: "I lost my house keys late at night and was panicking. Called these guys and they were there so fast. The technician was super friendly and made me feel safe. Thank you so much!" 
  },
  { 
    fullName: "Mike T.", 
    rating: 5, 
    testimonial: "Great experience with their safe opening service. I inherited an old safe and couldn't get it open. They opened it without damaging it. True experts." 
  },
  { 
    fullName: "Emily Chen", 
    rating: 5, 
    testimonial: "Fast, reliable, and affordable. I've used them for both my car and my apartment. Best locksmith in town hands down." 
  }
];

export default function Homepage({
  services,
  testimonials,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const phone = "(800) 687- 0480";

  return (
    <>
      <Head>
        <title>Oscars Lock & Key Services</title>
        <meta name="description" content="Oscars Lock & Key Services" />
      </Head>
      <GoogleScript />
      <HomepageWrapper>
        <Slider phone={phone} />
        <WhiteBackgroundContainer>
          <div className="flex flex-col items-center">
            <div className="lg:flex xl:align-top lg:space-x-4 space-y-2 lg:space-y-0 justify-center align-middle mx-0">
              <div className="flex flex-col mx-0 w-auto 2xl:max-w-[65%] xl:max-w-[80%]">
                
                {/* --- GRID (Passed directly, NO sorting) --- */}
                <ServicesGrid services={services} />
                
                <PhoneBtn phone={phone} />
                <About />
              </div>
              <PaymentBox>
                <PaymentContainer><img src="/payment.png" /></PaymentContainer>
                <PhoneBtn phone={phone} />
                <TextBubble />
                <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" />
              </PaymentBox>
            </div>
            <MapContainer>
              <OurTeam testimonials={testimonials} />
              <PhoneBtn phone={phone} />
              <PhotoSlider />
            </MapContainer>
          </div>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <button onClick={() => router.push(`/coupons`)} className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto">
            FOR COUPONS CLICK HERE
          </button>
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`max-width: 100vw; background-color: white; overflow: hidden; & > :last-child { margin-bottom: 2rem; }`;
export const PaymentContainer = styled.div`display: flex; justify-content: start; margin-top: -3.5rem; align-items: start; img { margin-bottom: auto; padding: 0; } ${media("<largeDesktop")} { margin-top: 0rem; }`;
export const PaymentBox = styled.div`display: flex; flex-direction: column; align-items: center; margin: 0 0; ${media(">=largeDesktop")} { width: 30%; } ${media("<=phone")} { margin: 0 2rem; }`;
const DarkerBackgroundContainer = styled.div`background: rgb(251, 251, 253); display: flex; max-width: 100vw; overflow: hidden; flex-direction: column; justify-content: center;`;
export const WhiteBackgroundContainer = styled.div`background: rgb(255, 255, 255); display: flex; flex-direction: column; justify-content: center; max-width: 100vw; overflow: hidden; padding: 0 10rem; padding-top: 5rem; & > *:not(:first-child) { margin-top: 3rem; } ${media("<=phone")} { padding: 0 0; } ${media(">largeDesktop")} { align-items: center; margin: 0 auto; } @media (min-width: 375px) and (max-width: 640px) { padding: 0 0; } @media (min-width: 2240px) { width: 60vw; margin: 0 auto; } @media (min-width: 1440px) { width: 100vw; margin: 0 auto; }`;
export const MapContainer = styled.div`display: flex; flex-direction: row; max-width: 60vw; align-items: center; padding: 0 0rem; justify-content: space-between; align-items: center; ${media("<tablet")} { flex-direction: column; } @media (min-width: 375px) and (max-width: 640px) { padding: 0 0; } @media (max-width: 1440px) and (min-width: 1024px) { max-width: 90vw; } @media (min-width: 1280px) { max-width: 1190px; overflow: hidden; } @media (min-width: 1280px) and (max-width: 2652px) { padding: 0 3rem; padding-left: 5rem; } @media (max-width: 1440px) and (min-width: 768px) { width: 1506px; }`;

export async function getServerSideProps(ctx: any) {
  // Return the static data immediately
  return {
    props: {
      services: STATIC_SERVICES, 
      testimonials: STATIC_TESTIMONIALS,
    },
  };
}
