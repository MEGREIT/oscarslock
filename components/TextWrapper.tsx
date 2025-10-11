import React from "react";
import styled from "styled-components";

interface TextWrapperProps {
  text: string;
}

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const TextWrapper: React.FC<TextWrapperProps> = ({ text }) => {
  const truncateText = (inputText: string, wordLimit: number): string => {
    const words = inputText.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return inputText;
  };

  return <Wrapper>{truncateText(text, 50)}</Wrapper>;
};

export default TextWrapper;
