import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { media } from "@/utils/media";
import { GetServerSideProps } from "next";
import { getCityPhone } from "@/utils/getCityPhone"; 
import cityData from "@/utils/cities_data.json";

// --- INTERFACE ---
interface TermsProps {
  navbarTitle: string;
}

export default function TermsConditions({ navbarTitle }: TermsProps) {
  const cityNameDisplay = navbarTitle || "Need a Local Locksmith?";

  return (
    <>
      <Head>
        <title>Terms and Conditions - {cityNameDisplay} | Oscars Lock & Key Services</title>
        <meta name="description" content={`Terms and Conditions for Oscars Lock & Key Services in ${cityNameDisplay}`} />
      </Head>

      {/* --- CONTENT ONLY (Global Navbar handles the top part) --- */}
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
              <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by Oscars Lock & Key Services at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

              <SectionHeader>3. Disclaimer</SectionHeader>
              <p>The materials on Oscars Lock & Key Services' website are provided "as is". Oscars Lock & Key Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Oscars Lock & Key Services does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</p>

              <SectionHeader>4. Limitations</SectionHeader>
              <p>In no event shall Oscars Lock & Key Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Oscars Lock & Key Services' Internet site, even if Oscars Lock & Key Services or Oscars Lock & Key Services' authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

              <SectionHeader>5. Revisions and Errata</SectionHeader>
              <p>The materials appearing on Oscars Lock & Key Services' website could include technical, typographical, or photographic errors. Oscars Lock & Key Services does not warrant that any of the materials on its web site are accurate, complete, or current. Oscars Lock & Key Services may make changes to the materials contained on its web site at any time without notice. Oscars Lock & Key Services does not, however, make any commitment to update the materials.</p>

              <SectionHeader>6. Links</SectionHeader>
              <p>Oscars Lock & Key Services has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Oscars Lock & Key Services of the site. Use of any such linked web site is at the user's own risk.</p>

              <SectionHeader>7. Site Terms of Use Modifications</SectionHeader>
              <p>Oscars Lock & Key Services may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>

              <SectionHeader>8. Governing Law</SectionHeader>
              <p>Any claim relating to Oscars Lock & Key Services' website shall be governed by the laws of the State of Massachusetts without regard to its conflict of law provisions.</p>
              
              <p><strong>General Terms and Conditions applicable to Use of a Web Site.</strong></p>
            </TextContent>
          </LeftColumn>
        </ContentRow>
      </MainWrapper>
    </>
  );
}

// --- SERVER SIDE LOGIC ---
// This fetches the data and sends it to _app.tsx, which updates the Global Navbar automatically.
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
