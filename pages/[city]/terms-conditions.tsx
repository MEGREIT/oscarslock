import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { media } from "@/utils/media";
import NextLink from "next/link";
import { GetServerSideProps } from "next";
import { getCityPhone } from "@/utils/getCityPhone"; 
import cityData from "@/utils/cities_data.json";

interface TermsProps {
  phone: string;
  navbarTitle: string;
  city: string; // Added City to props
}

export default function TermsConditions({ phone, navbarTitle, city }: TermsProps) {
  // --- DYNAMIC DATA ---
  const phoneDisplay = phone || "(800) 687-0480";
  const phoneLink = `tel:${phoneDisplay.replace(/\D/g, "")}`;
  const cityNameDisplay = navbarTitle || "Need a Local Locksmith?";

  // --- SMART LINK LOGIC ---
  // If we have a city, put it in the URL. Otherwise go to root.
  const homeLink = city ? `/${city}` : "/";
  const aboutLink = city ? `/${city}/about` : "/about"; // Assuming you have these pages, otherwise keep global
  const servicesLink = city ? `/${city}/services` : "/services";
  const contactLink = city ? `/${city}/contact` : "/contact";
  const privacyLink = city ? `/${city}/privacy-policy` : "/privacy-policy";
  const termsLink = city ? `/${city}/terms-conditions` : "/terms-conditions";

  return (
    <>
      <Head>
        <title>Terms and Conditions - {cityNameDisplay} | Oscars Lock & Key Services</title>
        <meta name="description" content={`Terms and Conditions for Oscars Lock & Key Services in ${cityNameDisplay}`} />
      </Head>
      
      <style jsx global>{`
        body::before,
        body > div:not(#__next),
        #__next::before {
          display: none !important;
        }
      `}</style>
      
      {/* --- NAVBAR --- */}
      <StickyWrapper>
        <div className="w-screen bg-white">
          <NavbarContainer>
            <Content>
              {/* SMART HOME LINK */}
              <NextLink className="max-h-52" href={homeLink} passHref>
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
                <p className="block md:hidden text-[12px]">
                  {cityNameDisplay}
                </p>
                <div>
                  <svg fill="#751318" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
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
          <LeftColumn>
            <PageTitle>Terms and Conditions</PageTitle>

            <TextContent>
              <SectionHeader>1. Terms</SectionHeader>
              <p>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.</p>

              <SectionHeader>2. Use License</SectionHeader>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Oscars Lock & Key Services' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on Oscars Lock & Key Services' website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              
              <SectionHeader>3. Disclaimer</SectionHeader>
              <p>The materials on Oscars Lock & Key Services' website are provided "as is". Oscars Lock & Key Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <SectionHeader>4. Limitations</SectionHeader>
              <p>In no event shall Oscars Lock & Key Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Oscars Lock & Key Services' Internet site.</p>

              <SectionHeader>5. Revisions and Errata</SectionHeader>
              <p>The materials appearing on Oscars Lock & Key Services' website could include technical, typographical, or photographic errors. Oscars Lock & Key Services does not warrant that any of the materials on its web site are accurate, complete, or current.</p>

              <SectionHeader>6. Links</SectionHeader>
              <p>Oscars Lock & Key Services has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Oscars Lock & Key Services of the site.</p>

              <SectionHeader>7. Site Terms of Use Modifications</SectionHeader>
              <p>Oscars Lock & Key Services may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>

              <SectionHeader>8. Governing Law</SectionHeader>
              <p>Any claim relating to Oscars Lock & Key Services' website shall be governed by the laws of the State of Massachusetts without regard to its conflict of law provisions.</p>
              
              <p><strong>General Terms and Conditions applicable to Use of a Web Site.</strong></p>
            </TextContent>
          </LeftColumn>
        </ContentRow>
      </MainWrapper>

      {/* --- FOOTER WITH SMART LINKS --- */}
      <FooterWrapper>
        <FooterContent>
          <p>© 2024 Oscars Lock & Key Services. All rights reserved.</p>
          <FooterLinks>
            <a href={homeLink}>Home</a>
            <a href={aboutLink}>About</a>
            <a href={servicesLink}>Services</a>
            <a href={contactLink}>Contact</a>
            {/* THESE NOW KEEP YOU IN THE CITY */}
            <a href={privacyLink}>Privacy Policy</a>
            <a href={termsLink}>Terms & Conditions</a>
          </FooterLinks>
        </FooterContent>
      </FooterWrapper>
    </>
  );
}

// --- SERVER SIDE LOGIC ---
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const city = params.city as string; // "cambridge"

  let phone = "(800) 687- 0480";
  let navbarTitle = "Need a Local Locksmith?";

  if (city) {
    try {
      const cityPhone = getCityPhone(city);
      if (cityPhone) phone = cityPhone;

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

  // Pass 'city' to the component so links can use it
  return { props: { phone, navbarTitle, city: city || null } };
};

// --- STYLES (UNCHANGED) ---
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
  ${media("<=tablet")} { padding: 0.5rem 1rem; }
  @media (min-width: 1440px) { max-width: 1430px; }
  @media (min-width: 1535px) and (max-width: 2652px) { max-width: 1380px; }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 2rem;
  div { display: flex; }
  svg {
    color: #751318;
    width: 20px;
    margin-right: 4px;
    @media (max-width: 1040px) { width: 16px; margin-right: 3px; }
    @media (max-width: 425px) { width: 12px; margin-right: 2px; }
  }
  span {
    display: flex;
    align-items: center;
    font-size: 2rem;
    @media (max-width: 1040px) { font-size: 1.4rem; }
    @media (max-width: 869px) { font-size: 1rem; }
    @media (max-width: 425px) { font-size: 0.8rem; }
  }
  .var {
    margin-right: 1rem;
    color: #000;
    @media (max-width: 768px) { margin-right: 0.5rem; }
  }
  .phone {
    color: #751318;
    font-size: 2rem;
    @media (max-width: 1040px) { font-size: 1.4rem; }
    @media (max-width: 869px) { font-size: 0.9rem; }
    @media (max-width: 305px) { font-size: 0.8rem; }
  }
  p { font-weight: 800; }
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  text-decoration: none;
  color: rgb(36, 58, 90);
  cursor: pointer;
`;

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
`;

const LeftColumn = styled.div`
  flex: 1;
  width: 100%;
`;

const PageTitle = styled.h1`
  font-family: "Times New Roman", serif;
  font-size: 2rem;
  color: #0A3161;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.1;
  ${media("<=tablet")} { font-size: 1.6rem; }
`;

const TextContent = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e4d8b;
  p { margin-bottom: 1rem; margin-top: 0; color: #1e4d8b; }
  ul { margin-bottom: 0.8rem; margin-top: 0; padding-left: 1.8rem; list-style: none; color: #1e4d8b; }
  li { margin-bottom: 1rem; padding-left: 1.8rem; position: relative; color: #1e4d8b; line-height: 1.6; }
  li::before { content: "●"; position: absolute; left: 0; color: #1e4d8b; font-weight: 700; }
  ${media("<=tablet")} { font-size: 0.9rem; }
`;

const SectionHeader = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  color: #1e4d8b;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 10px;
  ${media("<=tablet")} { font-size: 1.1rem; }
`;

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
  p { margin-bottom: 20px; font-size: 1rem; color: white; }
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
    &:hover { opacity: 0.7; text-decoration: underline; }
  }
  ${media("<=phone")} {
    gap: 15px;
    a { font-size: 0.85rem; }
  }
`;
