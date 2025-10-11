import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { media } from "utils/media";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export interface AboutSectionProps {
  title: string;
  reversed?: boolean;
}

export default function AboutSection({
  title,
  reversed,
  children,
}: PropsWithChildren<AboutSectionProps>) {
  return (
    <AboutSectionWrapper reversed={reversed}>
      <ContentContainer>
        <ServiceSectionTitle>{title}</ServiceSectionTitle>
        <RichText>{children}</RichText>
      </ContentContainer>
    </AboutSectionWrapper>
  );
}

const RichText = styled.div`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 4rem;
  margin-top: 2rem;
  width: 75%;

  ol,
  ul {
    list-style: none;
    padding: 0rem;

    li {
      padding-left: 2rem;
      position: relative;

      & > * {
        display: inline-block;
        vertical-align: top;
      }

      &::before {
        position: absolute;
        content: "L";
        left: 0;
        top: 0;
        text-align: center;
        color: rgb(21, 35, 62);
        font-family: arial;
        transform: scaleX(-1) rotate(-35deg);
      }
    }
  }

  table {
    border-collapse: collapse;

    table-layout: fixed;
    border-spacing: 0;
    border-radius: 5px;
    border-collapse: separate;
  }
  th {
    background: rgb(255, 255, 255);
  }

  th,
  td {
    border: 1px solid rgb(255, 255, 255);
    padding: 1rem;
  }

  tr:nth-child(even) {
    background: rgb(255, 255, 255);
  }

  ${media("<=desktop")} {
    font-size: 1.5rem;
  }
  ${media("<=tablet")} {
    text-align: center;
    width: 100%;
  }
`;

const ServiceSectionTitle = styled(SectionTitle)`
  text-align: left;
  ${media("<tablet")} {
    text-align: center;
    font-size: 3rem;
  }
  ${media("=tablet")} {
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  ${media("<=tablet")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

type Props = Pick<AboutSectionProps, "reversed">;
const AboutSectionWrapper = styled(Container)`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: ${(p: Props) => (p.reversed ? "row-reverse" : "row")};
  margin: 2rem 0;

  ${media("<=desktop")} {
    flex-direction: column;
  }
  ${media("<tablet")} {
    flex-direction: column;
    align-items: center;
  }

  ${media("<largeDesktop")} {
    max-width: 90%;
  }
`;
