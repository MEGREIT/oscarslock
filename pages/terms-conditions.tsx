import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { media } from "@/utils/media";
import TextBubble from "@/components/TextBubble";
import PhoneBtn from "@/components/PhoneBtn";
import NextLink from "next/link";

export default function TermsConditions() {
  const phoneDisplay = "(800) 687-0480";
  const phoneLink = "tel:8006870480";
  const cityNameDisplay = "Need a Local Locksmith?";

  return (
    <>
      <Head>
        <title>Terms and Conditions | Oscars Lock & Key Services</title>
        <meta name="description" content="Terms and Conditions for Oscars Lock & Key Services" />
      </Head>
      
      {/* Hide GoogleScript floating elements */}
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
                  <div className="relative w-44 h-28 sm:w-56 sm:h-36 md:w-72 md:h-48">
                    <img
                      src="/logos/LOGO.png"
                      alt="logo"
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </LogoWrapper>
              </NextLink>
              <p className="var hidden md:block text-[33px]">
                {cityNameDisplay}
              </p>
              <div className="flex items-center">
                <p className="block md:hidden text-[14px] mr-4">
                  {cityNameDisplay}
                </p>
                <div className="flex items-center">
                  <svg
                    fill="#751318"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <span className="flex items-center whitespace-nowrap">
                    <span className="phone mx-0 px-0">{`Call Now: `}</span>
                    <a href={phoneLink} className="inline">
                      <span className="cursor-pointer text-[#751318] font-extrabold">
                        {phoneDisplay}
                      </span>
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
            <PageTitle>Terms and Conditions</PageTitle>
            <PageSubTitle>Oscar's Lock & Key services Terms and Conditions</PageSubTitle>

            <TextContent>
              <SectionHeader>1. Terms</SectionHeader>
              <p>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.</p>

              <SectionHeader>2. Use License</SectionHeader>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Oscar's Lock & Key Services' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on Oscar's Lock & Key Services' website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Oscar's Lock & Key Services at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

              <SectionHeader>3. Disclaimer</SectionHeader>
              <p>The materials on Oscar's Lock & Key Services' website are provided "as is". Oscar's Lock & Key Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Oscar's Lock & Key Services does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</p>

              <SectionHeader>4. Limitations</SectionHeader>
              <p>In no event shall Oscar's Lock & Key Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Oscar's Lock & Key Services' Internet site, even if Oscar's Lock & Key Services or Oscar's Lock & Key Services' authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

              <SectionHeader>5. Revisions and Errata</SectionHeader>
              <p>The materials appearing on Oscar's Lock & Key Services' website could include technical, typographical, or photographic errors. Oscar's Lock & Key Services does not warrant that any of the materials on its web site are accurate, complete, or current. Oscar's Lock & Key Services may make changes to the materials contained on its web site at any time without notice. Oscar's Lock & Key Services does not, however, make any commitment to update the materials.</p>

              <SectionHeader>6. Links</SectionHeader>
              <p>Oscar's Lock & Key Services has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Oscar's Lock & Key Services of the site. Use of any such linked web site is at the user's own risk.</p>

              <SectionHeader>7. Site Terms of Use Modifications</SectionHeader>
              <p>Oscar's Lock & Key Services may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>

              <SectionHeader>8. Governing Law</SectionHeader>
              <p>Any claim relating to Oscar's Lock & Key Services' website shall be governed by the laws of the State of Massachusetts without regard to its conflict of law provisions.</p>
              
              <p><strong>General Terms and Conditions applicable to Use of a Web Site.</strong></p>

              <CouponBox>
                  <h3>Take a Look At Our Coupons - You Might Qualify For a Discount!</h3>
                  <a href="/coupons">FOR COUPONS CLICK HERE</a>
              </CouponBox>
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
    </>
  );
}

// --- NAVBAR STYLES (EXACT FROM NAVBAR COMPONENT) ---

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
  padding: 1.5rem 90px;
  width: 100%;
  max-width: 1550px;
  max-height: 7.7rem;
  margin: 0 auto;
  background-color: #fff;
  
  ${media("<=tablet")} {
    padding: 2rem 1rem;
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
    width: 30px;
    margin-right: 10px;
    flex-shrink: 0;
    
    @media (max-width: 1040px) {
      width: 20px;
      margin-right: 6px;
    }
    
    @media (max-width: 425px) {
      width: 15px;
      margin-right: 4px;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 3rem;
    gap: 6px;
    
    @media (max-width: 1040px) {
      font-size: 2rem;
      gap: 4px;
    }
    
    @media (max-width: 869px) {
      font-size: 1.4rem;
      gap: 3px;
    }
    
    @media (max-width: 425px) {
      font-size: 1rem;
      gap: 2px;
    }
  }

  .var {
    margin-right: 1rem;
    color: #000;
  }

  .phone {
    color: #751318;
    font-size: 3rem;
    
    @media (max-width: 1040px) {
      font-size: 2rem;
    }
    
    @media (max-width: 869px) {
      font-size: 1rem;
    }
    
    @media (max-width: 305px) {
      font-size: 1rem;
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

const CouponBox = styled.div`
  margin-top: 80px;
  border-top: 2px solid #e5e7eb;
  padding-top: 60px;
  text-align: center;

  h3 {
    color: #0A3161;
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    background: #751318;
    color: white;
    padding: 20px 50px;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s;

    &:hover { background: #5e0a0a; }
  }
`;