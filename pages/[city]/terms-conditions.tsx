import React from "react";
import styled from "styled-components";
import Page from "components/Page";
import { media } from "utils/media";

const TermsAndConditions = () => {
  return (
    <Page
      title="Terms and Conditions"
      description="Terms and Conditions for Oscar’s Lock & Key Services"
    >
      <Container>
        <Title>Terms and Conditions</Title>
        <Content>
          <p><strong>Oscar’s Lock & Key Services Terms and Conditions</strong></p>
          
          <h3>1. Terms</h3>
          <p>
            By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law.
          </p>

          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Oscar’s Lock & Key Services’ website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Oscar’s Lock & Key Services’ website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or “mirror” the materials on any other server.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Oscar’s Lock & Key Services at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>

          <h3>3. Disclaimer</h3>
          <p>
            The materials on Oscar’s Lock & Key Services’ website are provided “as is”. Oscar’s Lock & Key Services makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Oscar’s Lock & Key Services does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
          </p>

          <h3>4. Limitations</h3>
          <p>
            In no event shall Oscar’s Lock & Key Services or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Oscar’s Lock & Key Services’ Internet site, even if Oscar’s Lock & Key Services or Oscar’s Lock & Key Services’ authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>

          <h3>5. Revisions and Errata</h3>
          <p>
            The materials appearing on Oscar’s Lock & Key Services’ website could include technical, typographical, or photographic errors. Oscar’s Lock & Key Services does not warrant that any of the materials on its web site are accurate, complete, or current. Oscar’s Lock & Key Services may make changes to the materials contained on its web site at any time without notice. Oscar’s Lock & Key Services does not, however, make any commitment to update the materials.
          </p>

          <h3>6. Links</h3>
          <p>
            Oscar’s Lock & Key Services has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Oscar’s Lock & Key Services of the site. Use of any such linked web site is at the user’s own risk.
          </p>

          <h3>7. Site Terms of Use Modifications</h3>
          <p>
            Oscar’s Lock & Key Services may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
          </p>

          <h3>8. Governing Law</h3>
          <p>
            Any claim relating to Oscar’s Lock & Key Services’ website shall be governed by the laws of the State of Massachusetts without regard to its conflict of law provisions.
          </p>

          <p><em>General Terms and Conditions applicable to Use of a Web Site.</em></p>

        </Content>
      </Container>
    </Page>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 60vh;
  ${media("<=tablet")} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0a3161;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;

  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    color: #751318;
    font-size: 1.8rem;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.2rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 2rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 0.8rem;
  }
`;

export default TermsAndConditions;