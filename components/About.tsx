import { media } from "@/utils/media";
import React from "react";
import styled from "styled-components";
import PhotoSlider from "./PhotoSlider";

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
                {/* These spans will now be Dark Blue #0A3161 */}
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
              <div className="flex flex-col space-y-4 w-full xl:ml-24">
                <h1>Are you looking for</h1>
                {list.map((text: string) => (
                  <div className="flex space-x-2" key={text}>
                    <img className="w-10 h-10 object-contain flex-shrink-0" src="/logos/LOGO-bullet.png" />
                    <p>{`${text}`}</p>
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
  }
`;

const Description = styled.span`
  font-size: 14px;
  text-align: left;
  font-weight: normal;
  font-family: "Times New Roman", sans-serif;
  
  /* --- CHANGED HERE: Added Dark Blue Color --- */
  span {
    font-weight: bold;
    font-size: 2rem;
    color: #0A3161; 
  }
  /* ------------------------------------------ */

  p {
    font-size: 17px;
  }
  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: #15233e;
    font-weight: bold;
  }
  h2 {
    font-size: 3rem;
    margin-top: 2rem;
    color: #15233e;
    font-weight: bold;
  }
  ${media("<=tablet")} {
    font-size: 14px;
    margin: 5rem 1rem;
    text-align: center;
  }
`;
