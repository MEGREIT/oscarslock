// Spinner.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

const spinBeforeAnimation = keyframes`
  from {
    box-shadow: 0 0 0 -5.6px rgb(240, 13, 6);
  }
`;

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above other content */
`;

const SpinnerElement = styled.div`
  width: 80px; /* Adjust the size as needed */
  height: 80px; /* Adjust the size as needed */
  animation: ${spinBeforeAnimation} 0.5s backwards,
    ${spinAnimation} 1.25s 0.5s infinite ease;
  border: 10px solid #0a3161;
  border-radius: 50%;
  box-shadow: 0 -60px 0 -10px #751318;
`;

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerElement />
    </SpinnerContainer>
  );
};

export default Spinner;
