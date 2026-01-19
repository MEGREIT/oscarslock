import { media } from "@/utils/media";
import React from "react";
import styled from "styled-components";

const list = [
  "The protection of your property or business?",
  "The support of qualified locksmith service?",
  "A group of trusted, insured and highly skilled locksmith professionals?",
  "Rendering our services with competitive pricing?",
];

const About = () => {
  return (
    <Wrapper>
      <Container>
        <ReversedRow>
          <Description>
            <div className="flex space-x-2 justify-center align-middle">
              <img
                className=" w-72 mt-0 xl:block hidden"
                src="/handyman.png"
                alt="Lock"
              />
              <div className="flex flex-col my-auto">
                {/* --- MISSION/VISION TEXT --- */}
                <MissionVisionText>
                  <span>{`OUR MISSION – `}</span>
                  Partnering with Oscars Lock & Key Services ensures you receive
                  personalized security solutions tailored to your specific needs.
                  <br />
                  <br />
                  <span>{`OUR VISION - `}</span>
                  With the support of qualified locksmiths, you can make right
                  decisions and maximize the effictiveness of your security
                  investments.
                </MissionVisionText>
                <br />
                <br />
              </div>
            </div>

            <div className="flex space-x-2 lg:align-middle">
              <div className="flex flex-col space-y-4 w-full xl:ml-24 mobile-list-container">
                <h1>Are you looking for</h1>
                {list.map((text: string, i: number) => (
                  <div className="flex space-x-2 items-center" key={text}>
                    {/* Keep original logo size */}
                    <img className="w-7 h-7 md:w-10 md:h-10 object-contain flex-shrink-0" src="/logos/LOGO-bullet.png" />
                    
                    {/* Logic for the 3rd item vs others */}
                    <ListText $isThirdItem={i === 2}>
                        {text}
                    </ListText>
                  </div>
                ))}
              </div>
            </div>
          </Description>
        </ReversedRow>
      </Container>
    </Wrapper>
  );
};

export default About;

// --- UPDATED: HEADINGS NOW MATCH "Are you looking for" COLOR ---
const MissionVisionText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  line-height: 1.6;
  color: #1e4d8b; /* Body text remains lighter blue */
  font-weight: 400;
  
  span {
    font-weight: 700;
    color: #0A3161; /* <--- FIXED: Matches 'Are you looking for' color */
    font-size: 1.8rem;
  }
  
  ${media("<=tablet")} {
    font-size: 1.6rem;
    
    span {
      font-size: 1.6rem;
    }
  }
  
  ${media("<=phone")} {
    font-size: 1.5rem;
    
    span {
      font-size: 1.5rem;
    }
  }
`;

// --- OPTIMIZED LIST TEXT COMPONENT ---
const ListText = styled.p<{ $isThirdItem?: boolean }>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.8rem;
  line-height: 1.6;
  color: #1e4d8b;
  margin: 0;
  font-weight: 400;
  
  ${media("<=tablet")} {
    font-size: 1.6rem;
    letter-spacing: -0.3px; 
    line-height: 1.4;
    flex: 1;
    min-width: 0; 
    width: 100%;
    white-space: ${(props) => (props.$isThirdItem ? "normal" : "nowrap")} !important;
    overflow-x: ${(props) => (props.$isThirdItem ? "visible" : "auto")};
    &::-webkit-scrollbar { display: none; }
  }
  
  ${media("<=phone")} {
    font-size: 1.5rem;
  }
`;

const Wrapper = styled.div`
  padding: 0rem 0rem;
  padding-bottom: 4rem;
  height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0 0;
  display: flex;
  ${media("<=desktop")} {
    flex-direction: column;
    padding: 4rem 1rem; 
    padding-top: 0rem;
  }
`;

const Container = styled.div``;

const ReversedRow = styled.div`
  margin: 0rem 1rem;
  margin-top: 10rem;
  display: flex;
  justify-content: start;
  flex-direction: row-reverse;
  align-items: start;
  .image {
    width: 14rem;
    margin-left: 1rem;
  }
  ${media("<=tablet")} {
    flex-direction: column;
    margin-top: 0rem;
    margin-left: 0; 
    margin-right: 0;
    width: 100%;
  }
`;

const Description = styled.span`
  font-size: 14px;
  text-align: left;
  font-weight: normal;
  font-family: "Times New Roman", sans-serif;

  h1 {
    font-family: "Times New Roman", serif;
    font-size: 4rem;
    margin-bottom: 2rem;
    color: #0A3161;
    font-weight: 700;
    line-height: 1.1;
    
    ${media("<=tablet")} {
      text-align: center; 
      font-size: 3rem;
    }
    
    ${media("<=phone")} {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-family: "Times New Roman", serif;
    font-size: 3rem;
    margin-top: 2rem;
    color: #0A3161;
    font-weight: 700;
  }

  ${media("<=tablet")} {
    font-size: 14px;
    margin: 5rem 0;
    text-align: left; 
    
    .mobile-list-container {
      align-items: flex-start; 
      padding: 0;
      width: 100%;
    }
  }
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: left;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: "Times New Roman", sans-serif;
  ${media("<=tablet")} {
    font-size: 28px;
  }
`;

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  align-items: center;
  border-left: solid 1px #83838390;
  img {
    margin-bottom: auto;
  }
  ${media("<largeDesktop")} {
    border-left: none;
  }
`;

const SubTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin: 0 10rem;
  color: #2c2c2c;
  margin-bottom: 3rem;
  font-weight: 500;
  font-family: "Times New Roman", sans-serif;
  ${media("<=tablet")} {
    font-size: 20px;
    margin: 0 2rem;
    margin-bottom: 3rem;
  }
`;

const Row = styled.div`
  margin: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .image {
    width: 14rem;
    margin-right: 1rem;
  }
  ${media("<=tablet")} {
    flex-direction: column;
  }
`;
