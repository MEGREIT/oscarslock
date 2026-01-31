import styled from "styled-components";
import Page from "components/Page";
import { media } from "utils/media";
import FormSection from "views/ContactPage/FormSection";
import InformationSection from "views/ContactPage/InformationSection";
import TextBubble from "@/components/TextBubble";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getCityPhone } from "@/utils/getCityPhone"; 
import cityData from "@/utils/cities_data.json";

// --- INTERFACE ---
interface ContactProps {
  phone: string;
  navbarTitle: string;
}

export default function ContactPage({ phone, navbarTitle }: ContactProps) {
  const router = useRouter();
  // --- DYNAMIC LINKS LOGIC ---
  const citySlug = router.query.city as string;
  const homeLink = citySlug ? `/${citySlug}` : "/";
  const couponsLink = citySlug ? `/${citySlug}/coupons` : "/coupons";

  return (
    <MobileFixWrapper>
      <Page
        imgURL="/contact.jpg"
        title="Contact Us" // <--- FIXED: Only shows "Contact Us" on the image
        description="Get in touch with us"
        // These props update the Top Navbar
        phone={phone}
        navbarTitle={navbarTitle}
      >
        <div className="xl:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 space-y-2 lg:space-y-0 max-w-[98%]">
          <ContactContainer>
            <InformationSection />
            <FormSection />
          </ContactContainer>

          <PaymentBox>
            <PaymentContainer>
              <img src="/payment.png" alt="Payments" />
            </PaymentContainer>
            <TextBubble />
            <img
              src="/logos/oscar-logo.png"
              className="w-[25rem] ml-0"
              alt="Logo"
            />
          </PaymentBox>
        </div>

        <div className="flex flex-col justify-center space-y-10">
          <ServiceCTA />
          <button
            onClick={() => router.push(couponsLink)}
            className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto"
          >
            FOR COUPONS CLICK HERE
          </button>
        </div>
      </Page>
    </MobileFixWrapper>
  );
}

// --- SERVER SIDE LOGIC ---
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const city = params.city as string;

  let phone = "(800) 687- 0480";
  let navbarTitle = "Need a Local Locksmith?";

  if (city) {
    try {
      // 1. Get Phone
      const cityPhone = getCityPhone(city);
      if (cityPhone) phone = cityPhone;

      // 2. Get Navbar Title
      const cityObj = cityData.hcms_cities.find((c) => c.subdomain === city);
      if (cityObj && cityObj.city) {
         navbarTitle = cityObj.city;
      } else {
         navbarTitle = city.charAt(0).toUpperCase() + city.slice(1);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { props: { phone, navbarTitle } };
};

// --- STYLES ---

const MobileFixWrapper = styled.div`
  width: 100%;

  ${media("<=tablet")} {
    & > div {
      & > div:first-child {
        background-size: 100% 100% !important;
        background-position: center center !important;
        background-repeat: no-repeat !important;
        min-height: 300px !important;
      }
    }
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media("<=tablet")} {
    flex-direction: column;
  }
`;

// Defined locally to prevent Module Not Found error
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
