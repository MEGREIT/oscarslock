import styled from "styled-components";
import Page from "components/Page";
import { media } from "utils/media";
import dynamic from "next/dynamic";
import InformationSection from "views/ContactPage/InformationSection";
import { PaymentBox, PaymentContainer } from ".";
import TextBubble from "@/components/TextBubble";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import { useRouter } from "next/router";

// Client-only FormSection
const FormSection = dynamic(() => import("views/ContactPage/FormSection"), {
  ssr: false,
});

export default function ContactPage() {
  const router = useRouter();
  return (
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
          onClick={() => router.push("/coupons")}
          className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto"
        >
          FOR COUPONS CLICK HERE
        </button>
      </div>
    </Page>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
