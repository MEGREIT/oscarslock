import { media } from "@/utils/media";
import React from "react";
import styled from "styled-components";
// import PhotoSlider from "./PhotoSlider"; 

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
              <div className="flex flex-col my-auto text-[17px]">
                {/* --- NORMAL MISSION/VISION TEXT --- */}
                <span>{`OUR MISSION – `}</span>
                Partnering with Oscars Lock & Key Services ensures you receive
                personalized security solutions tailored to your specific needs.
                <br />
                <br />
                <span>{`OUR VISION - `}</span>
                With the support of qualified locksmiths, you can make right
                decisions and maximize the effictiveness of your security
                investments.
                <br />
                <br />
                <br />
              </div>
            </div>

            <div className="flex space-x-2 lg:align-middle">
              <div className="flex flex-col space-y-4 w-full xl:ml-24 mobile-list-container">
                <h1>Are you looking for</h1>
                {list.map((text: string) => (
                  /* UPDATED: space-x-1 on mobile saves width */
                  <div className="flex space-x-1 md:space-x-2 items-center" key={text}>
                    {/* UPDATED: Slightly smaller icon (w-5) to match tiny text */}
                    <img className="w-5 h-5 md:w-10 md:h-10 object-contain flex-shrink-0" src="/logos/LOGO-bullet.png" />
                    
                    {/* --- FORCED SINGLE LINE TEXT --- */}
                    <ListText>{`${text}`}</ListText>
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

// --- COMPONENT FOR THE LIST ITEMS ONLY ---
const ListText = styled.p`
  font-size: 17px;
  margin: 0;
  
  ${media("<=tablet")} {
    font-size: 9px !important; /* Aggressively small to fit 1 line */
    white-space: nowrap !important; /* Force 1 line NO MATTER WHAT */
    line-height: 1.5;
    width: auto;
    flex: 1; /* Allow it to take available space */
  }
`;

const Wrapper = styled.div`
  padding: 0rem 0rem;
  padding-bottom: 4rem;
  height: 100%;
  max-width: 100%;
  margin: 0 0;
  display: flex;
  ${media("<=desktop")} {
    flex-direction: column;
    padding: 4rem 2rem;
    padding-top: 0rem;
  }
  ${media("<desktop")} {
    padding: 4rem 2rem;
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
  }
`;

const Description = styled.span`
  font-size: 14px;
  text-align: left;
  font-weight: normal;
  font-family: "Times New Roman", sans-serif;
  
  span {
    font-weight: bold;
    font-size: 2rem;
    color: #0A3161; 
  }

  /* --- GLOBAL P STYLE (Normal wrapping for other text) --- */
  p {
    font-size: 17px;
    ${media("<=tablet")} {
      font-size: 15px; 
      white-space: normal; 
    }
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: #15233e;
    font-weight: bold;
    
    ${media("<=tablet")} {
      text-align: center; 
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 3rem;
    margin-top: 2rem;
    color: #15233e;
    font-weight: bold;
  }

  ${media("<=tablet")} {
    font-size: 14px;
    margin: 5rem 0.5rem; 
    text-align: left; 
    
    .mobile-list-container {
      align-items: flex-start; 
      padding: 0 0.5rem; 
    }
  }
`;

// --- Extra Components that came from Merge (Keeping them to be safe) ---

const Title = styled.h1`
  font-size: 52px;
  text-align: left;
  margin-bottom: 3rem;
  font-weight: bold;
  font-family: "Times New Roman", sans-serif;
  ${media("<=tablet")} {
    font-size: 28px;
  }
  ${media("<tablet")} {
    text-align: center;
  }
  ${media("<=desktop")} {
    text-align: center;
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