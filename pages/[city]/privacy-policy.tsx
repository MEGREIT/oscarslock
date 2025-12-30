import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { media } from "@/utils/media";
import TextBubble from "@/components/TextBubble";
import PhoneBtn from "@/components/PhoneBtn";
import NextLink from "next/link";

export default function PrivacyPolicy() {
  const phoneDisplay = "(800) 687-0480";
  const phoneLink = "tel:8006870480";
  const cityNameDisplay = "Need a Local Locksmith?";

  return (
    <>
      <Head>
        <title>Privacy Policy | Oscars Lock & Key Services</title>
        <meta name="description" content="Privacy Policy for Oscars Lock & Key Services" />
      </Head>
      
      {/* Hide any extra floating elements */}
      <style jsx global>{`
        body::before,
        body > div:not(#__next),
        #__next::before {
          display: none !important;
        }
      `}</style>

      {/* --- EXACT NAVBAR FROM MAIN SITE --- */}
      <StickyWrapper>
        <div className="w-screen bg-white">
          <NavbarContainer>
            <Content>
              <NextLink className="max-h-52" href="/" passHref>
                <LogoWrapper>
                  <img
                    src="/logos/LOGO.png"
                    alt="logo"
                    style={{ width: 'auto', height: '100%', maxHeight: '4rem', objectFit: 'contain' }}
                  />
                </LogoWrapper>
              </NextLink>
              <p className="var hidden md:block text-[33px]">
                {cityNameDisplay}
              </p>
              <div className="flex flex-col space-y-2">
                <p className="block md:hidden text-[10px]">
                  {cityNameDisplay}
                </p>
                <div>
                  <svg
                    fill="#751318"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <span>
                    <span className="phone mx-0 px-0">{`Call Now: `}</span>
                    <a href={phoneLink}>
                      <p className="cursor-pointer text-[#751318]">
                        {phoneDisplay}
                      </p>
                    </a>
                  </span>
                </div>
              </div>
            </Content>
          </NavbarContainer>
        </div>
      </StickyWrapper>

      {/* --- MAIN CONTENT --- */}
      <MainWrapper>
        <ContentRow>
          
          {/* LEFT: TEXT */}
          <LeftColumn>
            <PageTitle>Privacy Policy</PageTitle>
            <PageSubTitle>Oscars Lock & Key Services Privacy Policy</PageSubTitle>

            <TextContent>
              <IntroText>Last Updated 2024. This privacy policy is effective immediately.</IntroText>

              <SectionHeader>Introduction</SectionHeader>
              <p>At Oscars Lock & Key Services (the "Company" or "We"), we respect your privacy and are committed to protecting it through our compliance with this policy.</p>
              <p>This policy describes the types of information we may collect from you or that you may provide when you visit this website (our "Website") and our practices for collecting, using, maintaining, protecting and disclosing that information.</p>
              
              <p>This policy applies to information we collect:</p>
              <ul>
                  <li>On this Website.</li>
                  <li>In email, text and other electronic messages between you and this Website.</li>
                  <li>Through mobile and desktop applications you download from this Website, which provide dedicated non-browser-based interaction between you and this Website.</li>
                  <li>When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.</li>
              </ul>

              <p>It does not apply to information collected by:</p>
              <ul>
                  <li>us offline or through any other means, including on any other website operated by Company or any third party (including our affiliates and subsidiaries); or</li>
                  <li>any third party (including our affiliates and subsidiaries), including through any application or content (including advertising) that may link to or be accessible from or on the Website.</li>
              </ul>

              <p>Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time. Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.</p>

              <SectionHeader>Children Under the Age of 13</SectionHeader>
              <p>Our Website is not intended for children under 13 years of age. No one under age 13 may provide any personal information to or on the Website. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this Website or on or through any of its features/register on the Website, make any purchases through the Website, use any of the interactive or public comment features of this Website or provide any information about yourself to us, including your name, address, telephone number, e-mail address or any screen name or user name you may use. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 13, please contact us via our contact us link.</p>

              <SectionHeader>Information We Collect About You and How We Collect It</SectionHeader>
              <p>We collect several types of information from and about users of our Website, including information:</p>
              <ul>
                  <li>by which you may be personally identified, such as name, postal address, email address, telephone number or ANY OTHER INFORMATION THE WEBSITE COLLECTS THAT IS DEFINED AS PERSONAL OR PERSONALLY IDENTIFIABLE INFORMATION UNDER AN APPLICABLE LAW ("personal information")</li>
                  <li>that is about you but individually does not identify you, and/or</li>
                  <li>about your internet connection, the equipment you use to access our Website and usage details.</li>
              </ul>

              <p>We collect this information:</p>
              <ul>
                  <li>Directly from you when you provide it to us.</li>
                  <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses and information collected through cookies, web beacons and other tracking technologies.</li>
                  <li>From third parties, for example, our business partners.</li>
              </ul>

              <SectionHeader>Information You Provide to Us</SectionHeader>
              <p>The information we collect on or through our Website may include:</p>
              <ul>
                  <li>Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, posting material or requesting further services. We may also ask you for information when you report a problem with our Website.</li>
                  <li>Records and copies of your correspondence (including email addresses), if you contact us.</li>
                  <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
                  <li>Details of transactions you carry out through our Website and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Website.</li>
                  <li>Your search queries on the Website.</li>
              </ul>
            </TextContent>
          </LeftColumn>

          {/* RIGHT: SIDEBAR */}
          <RightColumn>
            <SidebarBox>
              <PaymentImage>
                <img src="/payment.png" alt="We Accept" />
              </PaymentImage>
              
              <PhoneBtn phone="(800) 687-0480" />
              <TextBubble />

              <LogoImage>
                 <img src="/logos/oscar-logo.png" alt="Oscars Lock & Key" />
              </LogoImage>
            </SidebarBox>
          </RightColumn>

        </ContentRow>
      </MainWrapper>

      {/* --- FOOTER --- */}
      <FooterWrapper>
        <FooterContent>
          <p>© 2024 Oscar's Lock & Key Services. All rights reserved.</p>
          <FooterLinks>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>
          </FooterLinks>
        </FooterContent>
      </FooterWrapper>
    </>
  );
}

// --- NAVBAR STYLES ---

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  padding: 0.5rem 90px;
  width: 100%;
  max-width: 1550px;
  max-height: 5rem;
  margin: 0 auto;
  background-color: #fff;
  
  ${media("<=tablet")} {
    padding: 0.5rem 1rem;
  }
  
  @media (min-width: 1440px) {
    max-width: 1430px;
  }
  
  @media (min-width: 1535px) and (max-width: 2652px) {
    max-width: 1380px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 2rem;

  div {
    display: flex;
  }

  svg {
    color: #751318;
    width: 20px;
    margin-right: 4px;
    
    @media (max-width: 1040px) {
      width: 16px;
      margin-right: 3px;
    }
    
    @media (max-width: 425px) {
      width: 12px;
      margin-right: 2px;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 2rem;
    
    @media (max-width: 1040px) {
      font-size: 1.4rem;
    }
    
    @media (max-width: 869px) {
      font-size: 1rem;
    }
    
    @media (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  .var {
    margin-right: 1rem;
    color: #000;
    
    @media (max-width: 768px) {
      margin-right: 0.5rem;
    }
  }

  .phone {
    color: #751318;
    font-size: 2rem;
    
    @media (max-width: 1040px) {
      font-size: 1.4rem;
    }
    
    @media (max-width: 869px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 305px) {
      font-size: 0.8rem;
    }
  }

  p {
    font-weight: 800;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  text-decoration: none;
  color: rgb(36, 58, 90);
  cursor: pointer;
`;

// --- PAGE CONTENT STYLES ---

const targetFont = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

const MainWrapper = styled.div`
  background: white;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`;

const ContentRow = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  gap: 60px;

  ${media("<=largeDesktop")} {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 3;
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
  ${media("<=tablet")} { min-width: 100%; }
`;

const SidebarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 20px;
`;

const PaymentImage = styled.div`
  width: 100%;
  max-width: 250px;
  margin-bottom: 10px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const LogoImage = styled.div`
  width: 150px;
  margin-top: 20px;
  
  img {
    width: 100%;
    height: auto;
  }
`;

const PageTitle = styled.h1`
  font-family: ${targetFont};
  font-size: 3rem;
  color: #0A3161;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;
  
  ${media("<=tablet")} {
    font-size: 2.2rem;
  }
`;

const PageSubTitle = styled.h2`
  font-family: ${targetFont};
  font-size: 1.8rem;
  color: #0A3161;
  font-weight: 600;
  text-align: center;
  margin-top: 0;
  opacity: 0.9;
  margin-bottom: 30px;
  
  ${media("<=tablet")} {
    font-size: 1.4rem;
  }
`;

const IntroText = styled.p`
  font-family: ${targetFont};
  font-size: 18px;
  color: #0A3161;
  margin-bottom: 24px;
  font-weight: bold;
`;

const TextContent = styled.div`
  font-family: ${targetFont};
  font-size: 18px;
  line-height: 1.6;
  color: #0A3161;

  p { 
    margin-bottom: 24px;
    color: #0A3161;
  }
  
  ul { 
    margin-bottom: 24px; 
    padding-left: 30px; 
    color: #0A3161;
  }
  
  li { 
    margin-bottom: 10px;
    color: #0A3161;
  }
`;

const SectionHeader = styled.h3`
  font-family: ${targetFont};
  font-size: 1.5rem;
  color: #751318;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-weight: 700;
`;

// --- FOOTER STYLES ---

const FooterWrapper = styled.footer`
  background: #15233e;
  color: white;
  padding: 40px 20px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;

  p {
    margin-bottom: 20px;
    font-size: 1rem;
    color: white;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
      text-decoration: underline;
    }
  }

  ${media("<=phone")} {
    gap: 15px;
    
    a {
      font-size: 0.85rem;
    }
  }
`;
