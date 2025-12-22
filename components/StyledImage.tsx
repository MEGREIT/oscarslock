import { media } from "@/utils/media";
import React from "react";
import { Props } from "react-share/lib/ShareButton";
import styled, { keyframes } from "styled-components";

interface StyledImageProps {
  imageURL: string;
}

// Define the main component
function StyledImage({ imageURL }: StyledImageProps) {
  return (
    <ShrinkWrap>
      <Container>
        <ImgTop src={imageURL} alt="Top Image" />
        <ImgMid src={imageURL} alt="Middle Image" />
        <ImgBottom src={imageURL} alt="Bottom Image" />
      </Container>
    </ShrinkWrap>
  );
}
// Define keyframes for the animation
const flipme = keyframes`
  0% {
    transform: rotateY(-30deg) rotateX(0deg);
  }
  50% {
    transform: rotateY(0deg) rotateX(10deg);
  }
  100% {
    transform: rotateY(-30deg) rotateX(0deg);
  }
`;

// Define the main styled components
const Container = styled.div`
  position: relative;
  width: 550px;
  height: 1000px;
  transform: rotateY(0deg) rotateX(0deg) scale(0.5);
  transform-style: preserve-3d;
  animation: ${flipme} 30s linear infinite;
  transition: transform 300ms ease;
  transform-origin: 50% 50%;
`;

const ShrinkWrap = styled.div`
  /* Optional: You can add styles here for the shrinkwrap container */
  overflow: hidden;
  height: 100%;
  ${media("=tablet")} {
    display: flex;
    justify-content: center;
  }
`;

const Image = styled.img`
  position: absolute;
`;

const ImgTop = styled(Image)`
  clip-path: polygon(0 0, 0 200px, 200px 0);
  transform: translateZ(50px);
`;

const ImgMid = styled(Image)`
  clip-path: polygon(
    250px 0%,
    100% 0,
    100% 550px,
    150px 100%,
    0 100%,
    0% 250px
  );
`;

const ImgBottom = styled(Image)`
  clip-path: polygon(100% 600px, 200px 100%, 100% 100%);
  transform: translateZ(-50px);
`;

export default StyledImage;
