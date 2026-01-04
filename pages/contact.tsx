import styled from "styled-components";
import Page from "components/Page";
import { media } from "utils/media";
import FormSection from "views/ContactPage/FormSection";
import InformationSection from "views/ContactPage/InformationSection";
import MapSection from "views/ContactPage/MapSection";
import Divider from "components/Divider";
import { PaymentBox, PaymentContainer } from "./index"; 
import TextBubble from "@/components/TextBubble";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import { useRouter } from "next/router";

// --- UPDATED: Make image wider and fill better ---
const MobileFixWrapper = styled.div`
  width: 100%;

  /* Target the Page wrapper */
  & > div {
    /* Target the Hero/Header section inside the Page */
    & > div:first-child {
      /* Make image cover the full width and height properly */
      background-size: cover !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
      /* Increase height for better visibility */
      min-height: 400px !important;
      width: 100% !important;
      
      ${media("<=tablet")} {
        min-height: 350px !important;
        /* Ensure full width on mobile */
        width: 100vw !important;
        margin-left: calc(-50vw + 50%) !important;
      }
      
      ${media("<=phone")} {
        min-height: 300px !important;
      }
    }
  }
`;
// ---------------------------------------------------------

export default function ContactPage() {
  const router = useRouter();
  
  return (
    <MobileFixWrapper>
      <Page imgURL="/contact.jpg" title="Contact Us" description="">
        <div className="xl:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 space-y-2 lg:space-y-0 max-w-[98%]">
          <ContactContainer>
            <InformationSection />
            <FormSection />
          </ContactContainer>
          <PaymentBox>
            <PaymentContainer>
              <img src="/payment.png" />
            </PaymentContainer>
            <TextBubble />
            <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" />
          </PaymentBox>
        </div>
        
        <div className="flex flex-col justify-center space-y-10">
          <ServiceCTA />
          <button
            onClick={() => {
              router.push("/coupons");
            }}
            className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto"
          >
            FOR COUPONS CLICK HERE
          </button>
        </div>
      </Page>
    </MobileFixWrapper>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
