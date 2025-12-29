import NextLink from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";
// import Container from 'components/Container';
import OverTitle from "components/OverTitle";
// import SectionTitle from 'components/SectionTitle';
import { media } from "utils/media";

export default function ServiceCTA() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          {/* <OverTitle>Lorem ipsum dolor sit amet</OverTitle> */}
          
          {/* --- TEXT REMOVED/COMMENTED OUT HERE --- */}
          {/* <SectionTitle>
            Don't Wait, Reach Out To Oscars Lock & Key Services!
          </SectionTitle> */}
          {/* --------------------------------------- */}

          {/* <Description> Contact Us Today to Get Started!</Description> */}
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: #15233e;
`;

const SectionTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  /* max-width: 50%; */
  text-align: center;
  color: #15233e;
  background-color: white;

  ${media("<=desktop")} {
  }
  ${media("<tablet")} {
    /* font-size: 3rem; */
    max-width: 90%;
  }
`;

const Container = styled.div`
  /* background: rgb(21, 35, 62, 0.8); */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Link = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  background: transparent;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  border: 3px solid rgb(255, 255, 255);
  transition: all 0.35s;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    width: 200px;
    letter-spacing: 2px;
    border: 3px solid rgb(255, 175, 1);
    background: rgb(255, 175, 1);
    color: rgb(255, 255, 255);
  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  color: #15233e;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  & > *:not(:first-child) {
    max-width: 80%;
  }

  ${media("<=tablet")} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
    }
  }
`;

// const OutlinedButton = styled(Button)`
//   border: 1px solid rgb(255,255,255);
//   color: rgb(255,255,255);
// `;

const CtaWrapper = styled.div`
  /* background: url("/1.jpg") no-repeat center center; */
  background-color: white;
  background-size: cover; /* Ensures the background image covers the entire container */
  /* height: 50vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  overflow: hidden;

  /* to change later */
  ${media("<=tablet")} {
  }
`;