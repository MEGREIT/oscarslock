import Head from "next/head";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { EnvVars } from "env";
import { media } from "utils/media";
import SectionTitle from "./SectionTitle";
import NextImage from "next/image";
import { addSpaces } from "@/utils/formatString";
import GoogleScript from "./Script";
import Script from "next/script";
import PhoneBtn from "./PhoneBtn";

export interface PageProps {
  title: string;
  description?: string;
  isService?: boolean;
  imgURL?: string;
}

export default function Page({
  title,
  description,
  imgURL,
  isService,
  children,
  phone,
}: PropsWithChildren<PageProps>) {
  return (
    <>
      <Head>
        <title>
          {title} | {EnvVars.SITE_NAME}
        </title>
        <meta name="description" content={""} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WPNF8ZTD');
              `,
          }}
        />
      </Head>
      <GoogleScript />
      <Wrapper>
        <HeaderContainer imgURL={imgURL!}>
          {/* <NextImage src={imgURL} alt="header image" layout="fill" /> */}
          <Container>
            <Title>{`${
              isService ? addSpaces(title.toUpperCase()) : title
            }`}</Title>
            {isService ? (
              <SubTitle>{`OSCARS LOCK & KEY SERVICES LLC`}</SubTitle>
            ) : (
              <></>
            )}
            <PhoneBtn phone={phone || "(800) 687- 0480"} />
          </Container>
        </HeaderContainer>
        <Container>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

interface props {
  imgURL: string;
}
const HeaderContainer = styled.div<{ imgURL: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 528px;
  background: rgb(21, 35, 62, 0.8);
  margin: 0 0;
  padding: 0 2rem;
  background: url(${(p) => p.imgURL}) no-repeat center center;
  background-size: cover;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 180em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;
const Title = styled(SectionTitle)`
  color: rgb(255, 255, 255);
  margin-bottom: 2rem;
  font-size: 52px;
  ${media("<=tablet")} {
    font-size: 2rem;
  }
`;
const SubTitle = styled.h2`
  color: rgb(255, 255, 255);
  width: 100vw;
  /* background-color: #15233e; */
  margin-bottom: 2rem;
  text-align: center;
  font-size: 2rem;
  ${media("<=tablet")} {
    font-size: 1.6rem;
  }
`;

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;

  ${media("<=tablet")} {
    max-width: 100%;
  }
`;

const ChildrenWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 10rem;
`;
