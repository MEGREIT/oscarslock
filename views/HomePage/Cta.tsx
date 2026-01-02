import React from "react";
import styled from "styled-components";
import { media } from "utils/media";

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          {/* Main Heading ONLY - Subtext removed to avoid duplication */}
          <MainHeading>
            Take a Look At Our Coupons - You Might Qualify For a Discount!
          </MainHeading>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

// --- STYLES ---

const MainHeading = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  color: #1e4d8b;
  margin-bottom: 0; 
  line-height: 1.3;

  ${media("<=tablet")} {
    font-size: 1.8rem;
    padding: 0 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CtaWrapper = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  overflow: hidden;
`;
