import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { media } from "@/utils/media";
import { GetServerSideProps } from "next";
import { getCityPhone } from "@/utils/getCityPhone"; 
import cityData from "@/utils/cities_data.json";
import { WhiteBackgroundContainer } from "../index";

interface PrivacyProps {
  navbarTitle: string;
}

export default function PrivacyPolicy({ navbarTitle }: PrivacyProps) {
  const cityNameDisplay = navbarTitle || "Need a Local Locksmith?";

  return (
    <>
      <Head>
        <title>Privacy Policy - {cityNameDisplay} | Oscars Lock & Key Services</title>
        <meta name="description" content={`Privacy Policy for Oscars Lock & Key Services in ${cityNameDisplay}`} />
      </Head>

      {/* --- CONTENT ONLY (Global Navbar handles the top part) --- */}
      <MainWrapper>
        <ContentRow>
          <LeftColumn>
            <PageTitle>Privacy Policy</PageTitle>

            <TextContent>
              <IntroText>Last Updated 2025. This privacy policy is effective immediately.</IntroText>

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
        </ContentRow>
      </MainWrapper>
    </>
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

  // Send data to Global Layout
  return { props: { phone, navbarTitle } };
};

// --- STYLES ---

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
  
  ${media("<=tablet")} {
    font-size: 1.6rem;
  }
`;

const TextContent = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e4d8b;

  p { 
    margin-bottom: 1rem;
    margin-top: 0;
    color: #1e4d8b;
  }
  
  ul { 
    margin-bottom: 0.8rem;
    margin-top: 0;
    padding-left: 1.8rem;
    list-style: none;
    color: #1e4d8b;
  }
  
  li { 
    margin-bottom: 1rem;
    padding-left: 1.8rem;
    position: relative;
    color: #1e4d8b;
    line-height: 1.6;
  }

  li::before {
    content: "●";
    position: absolute;
    left: 0;
    color: #1e4d8b;
    font-weight: 700;
  }

  ${media("<=tablet")} {
    font-size: 0.9rem;
  }
`;

const IntroText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  color: #1e4d8b;
  margin-bottom: 1rem;
  font-weight: 700;
  margin-top: 0;
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

  ${media("<=tablet")} {
    font-size: 1.1rem;
  }
`;
