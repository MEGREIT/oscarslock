import React from "react";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from ".";
import TextBubble from "@/components/TextBubble";
import styled from "styled-components";
import { media } from "@/utils/media";

const About = () => {
  return (
    <WhiteBackgroundContainer>
      <ContentWrapper>
        <InnerContainer>
          <TopSection>
            <div>
              <PageTitle>About Us</PageTitle>
              <BodyText>
                Welcome to Oscars Lock & Key Services LLC, your trusted partner in
                locksmith services! With years of experience in the industry, we
                pride ourselves on providing reliable, professional, and
                affordable locksmith solutions for both residential and commercial
                needs.
              </BodyText>
            </div>
            <br />
            <br />
          </TopSection>
          
          <MainContent>
            <ContentWithImage>
              <LockImage
                src="/lock.png"
                alt="Lock"
              />
              <TextSection>
                Our team of skilled technicians is dedicated to ensuring your
                security and peace of mind. We understand that lockouts and
                security issues can be stressful, which is why we offer prompt and
                efficient service. Whether you need emergency lockout
                assistance, lock repairs, key cutting, or security system
                installations, we've got you covered.
                <br />
                <br />
                <p>
                  Oscars Lock & Key Services has unique security demands based on
                  its location, industry, size and operations. Partnering with
                  Oscars Lock & Key Services ensures you receive personalized
                  security solutions tailored to your specific needs. With the
                  support of qualified locksmiths, you can make right decisions
                  and maximize the effectiveness of your security investments.
                </p>
                <br />
                At Oscars Lock & Key Services, customer satisfaction is our top
                priority. We use the latest tools and techniques to deliver
                high-quality results, and we're committed to transparency and
                integrity in everything we do. Our mission is to keep you safe and
                secure, no matter the situation.
              </TextSection>
            </ContentWithImage>
            <br />
            <br />
            <p>
              Protecting your property or business from threats is a top priority
              for everybody. Hiring our experienced locksmiths is a critical step
              in achieving that goal. Our team can provide a comprehensive range
              of services, from lock installations and rekeying to master key
              system implementation and emergency lockout assistance.
            </p>
            <br />
            Thank you for choosing Oscars Lock & Key Services. We look forward to
            serving you!
          </MainContent>
        </InnerContainer>
      </ContentWrapper>
    </WhiteBackgroundContainer>
  );
};

// --- STYLED COMPONENTS ---

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #1e4d8b;
  margin-top: 10rem;
  margin-bottom: 8rem;
  max-width: 1550px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;

  ${media("<=desktop")} {
    margin-top: 8rem;
  }

  ${media("<=tablet")} {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1536px) {
    margin: 0 20rem;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 1280px) {
    flex-direction: row;
  }

  @media (min-width: 1536px) {
    margin: 0 20rem;
  }
`;

// --- TITLE INCREASED MORE ---
const PageTitle = styled.h1`
  font-size: 4.5rem; /* Increased to 4.5rem */
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #0A3161;

  ${media("<=tablet")} {
    font-size: 3rem; /* Increased to 3rem */
  }
`;

const BodyText = styled.span`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e4d8b;

  ${media("<=tablet")} {
    font-size: 0.9rem;
  }
`;

const MainContent = styled.span`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e4d8b;
  margin: 0 auto;

  p {
    color: #1e4d8b;
  }

  @media (min-width: 1536px) {
    margin: 0 20rem;
  }

  ${media("<=tablet")} {
    font-size: 0.9rem;
  }
`;

const ContentWithImage = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

const LockImage = styled.img`
  width: 100%;
  max-width: 300px;
  display: none;
  margin: auto;

  @media (min-width: 1280px) {
    display: block;
  }

  @media (min-width: 1536px) {
    max-width: 300px;
  }
`;

const TextSection = styled.span`
  color: #1e4d8b;
  
  p {
    color: #1e4d8b;
  }
`;

export default About;
