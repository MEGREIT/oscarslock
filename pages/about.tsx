import React from "react";
import styled from "styled-components";
import { media } from "@/utils/media";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from ".";
import TextBubble from "@/components/TextBubble";

const targetFont = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const About = () => {
  return (
    <WhiteBackgroundContainer>
      <ContentWrapper>
        <MainContent>
          <PageTitle>About Us</PageTitle>
          
          <TextContent>
            <IntroText>
              Welcome to Oscars Lock & Key Services LLC, your trusted partner in
              locksmith services! With years of experience in the industry, we
              pride ourselves on providing reliable, professional, and
              affordable locksmith solutions for both residential and commercial
              needs.
            </IntroText>

            <ContentWithImage>
              <LockImage
                src="/lock.png"
                alt="Lock"
              />
              <TextSection>
                <p>
                  Our team of skilled technicians is dedicated to ensuring your
                  security and peace of mind. We understand that lockouts and
                  security issues can be stressful, which is why we offer prompt and
                  efficient service. Whether you need emergency lockout
                  assistance, lock repairs, key cutting, or security system
                  installations, we've got you covered.
                </p>

                <p>
                  Oscars Lock & Key Services has unique security demands based on
                  its location, industry, size and operations. Partnering with
                  Oscars Lock & Key Services ensures you receive personalized
                  security solutions tailored to your specific needs. With the
                  support of qualified locksmiths, you can make right decisions
                  and maximize the effectiveness of your security investments.
                </p>

                <p>
                  At Oscars Lock & Key Services, customer satisfaction is our top
                  priority. We use the latest tools and techniques to deliver
                  high-quality results, and we're committed to transparency and
                  integrity in everything we do. Our mission is to keep you safe and
                  secure, no matter the situation.
                </p>
              </TextSection>
            </ContentWithImage>

            <p>
              Protecting your property or business from threats is a top priority
              for everybody. Hiring our experienced locksmiths is a critical step
              in achieving that goal. Our team can provide a comprehensive range
              of services, from lock installations and rekeying to master key
              system implementation and emergency lockout assistance.
            </p>

            <ClosingText>
              Thank you for choosing Oscars Lock & Key Services. We look forward to
              serving you!
            </ClosingText>
          </TextContent>
        </MainContent>
      </ContentWrapper>
    </WhiteBackgroundContainer>
  );
};

export default About;

// --- STYLED COMPONENTS ---

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #0A3161;
  margin-top: 10rem;
  margin-bottom: 8rem;
  max-width: 1550px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2.5rem;

  ${media("<=largeDesktop")} {
    margin-top: 8rem;
    padding: 0 2rem;
  }

  ${media("<=tablet")} {
    padding: 0 1.5rem;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;

  ${media("<=largeDesktop")} {
    max-width: 100%;
  }
`;

const PageTitle = styled.h1`
  font-family: ${targetFont};
  font-size: 3rem;
  color: #0A3161;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  
  ${media("<=tablet")} {
    font-size: 2.2rem;
  }
`;

const IntroText = styled.p`
  font-family: ${targetFont};
  font-size: 18px;
  color: #0A3161;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const TextContent = styled.div`
  font-family: ${targetFont};
  font-size: 18px;
  line-height: 1.6;
  color: #0A3161;
  width: 100%;

  p {
    margin-bottom: 24px;
    color: #0A3161;
  }
`;

const ContentWithImage = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  ${media("<=largeDesktop")} {
    flex-direction: column;
  }
`;

const LockImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  margin: auto 0;

  ${media("<=largeDesktop")} {
    display: none;
  }
`;

const TextSection = styled.div`
  flex: 1;

  p {
    margin-bottom: 24px;
    color: #0A3161;
  }
`;

const ClosingText = styled.p`
  font-family: ${targetFont};
  font-size: 18px;
  color: #0A3161;
  margin-top: 24px;
  line-height: 1.6;
`;
