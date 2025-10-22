import styled from "styled-components";
import { media } from "@/utils/media";
import PhoneBtn from "./PhoneBtn";

// Move ALL styled components OUTSIDE the function component
const ImageWrapper = styled.div`
  background: url("/homebanner.webp");
  background-size: cover;
  background-position: unset;
  position: relative;
  ${media("<=desktop")} {
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(21, 35, 62, 0.7);
  z-index: 1;
`;

const Container = styled.div`
  background: transparent;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 0rem;
  height: 50vh;
  z-index: 2;
  ${media("<tablet")} {
    height: 240px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  display: inline-block;
  text-align: center;
  align-self: center;
  position: relative;
  font-size: 6rem;
  margin-bottom: 2rem;
  margin-right: 5rem;
  margin-left: 5rem;
  margin-top: 3rem;
  color: white;
  ${media("<largeDesktop")} {
    font-size: 6rem;
  }
  ${media("<tablet")} {
    font-size: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
    align-self: center;
    justify-self: center;
  }
`;

const SubTitle = styled.div`
  display: inline-block;
  text-align: center;
  align-self: center;
  position: relative;
  margin-right: 5rem;
  margin-left: 5rem;
  color: white;
  ${media(">=desktop")} {
    font-size: 3.3rem;
  }
  ${media("<tablet")} {
    font-size: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    align-self: center;
    justify-self: center;
  }
`;

// Now the component function only contains logic and JSX
export default function Slider({ phone }: { phone?: string }) {
  return (
    <ImageWrapper>
      <Overlay />
      <Container>
        <Title>Oscars Lock & Key Services LLC</Title>
        <SubTitle>Your Safety is Our Priority</SubTitle>
        <PhoneBtn phone={phone || '(508) 736-7178'} />
      </Container>
    </ImageWrapper>
  );
}
