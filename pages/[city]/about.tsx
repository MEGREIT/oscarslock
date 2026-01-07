import React from "react";
import Head from "next/head";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from ".";
import TextBubble from "@/components/TextBubble";
import styled from "styled-components";
import { media } from "@/utils/media";
import { GetServerSideProps } from "next";
import { getCityPhone } from "@/utils/getCityPhone"; 
import cityData from "@/utils/cities_data.json";

// --- INTERFACE ---
interface AboutProps {
  navbarTitle: string;
  phone: string;
}

const About = ({ navbarTitle, phone }: AboutProps) => {
  const cityNameDisplay = navbarTitle || "Need a Local Locksmith?";

  return (
    <>
      <Head>
        <title>About Us - {cityNameDisplay} | Oscars Lock & Key Services</title>
        <meta name="description" content={`About Oscars Lock & Key Services in ${cityNameDisplay}`} />
      </Head>

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
    </>
  );
};

// --- SERVER SIDE LOGIC ---
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params = {} } = ctx;
  const city = params.city as string;

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

  return { props: { phone, navbarTitle } };
};

// --- STYLED COMPONENTS (MATCHING TERMS & PRIVACY) ---

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

// --- TITLE MATCHING TERMS PAGE ---
const PageTitle = styled.h1`
  font-family: "Times New Roman", serif;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #0A3161;
  line-height: 1.1;

  ${media("<=tablet")} {
    font-size: 1.6rem;
  }
`;

// --- TEXT MATCHING TERMS PAGE (Arial, 1.1rem) ---
const BodyText = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e4d8b;

  ${media("<=tablet")} {
    font-size: 0.9rem;
  }
`;

const MainContent = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #1e4d8b;
  margin: 0 auto;

  p {
    color: #1e4d8b;
    margin-bottom: 1rem;
    margin-top: 0;
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
  font-family: Arial, Helvetica, sans-serif;
  
  p {
    color: #1e4d8b;
  }
`;

export default About;
