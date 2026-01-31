import { media } from "@/utils/media";
// import Container from "components/BlogContainer";
import Layout from "components/BlogLayout";
import PostBody from "components/PostBody";
import PostTitle from "components/PostTitle";
import SectionSeparator from "components/SectionSeparator";
import * as demo from "lib/demo.data";
import type { Category, Post, Service, Settings } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import styled from "styled-components";
import ServiceHeader from "./ServiceHeader";
import Link from "next/link";
import { BackIcon } from "./BackIcon";
import { useEffect, useState } from "react";
import { NormalContainer } from "./BlogContainer";
// import { ServiceButton } from "./ServicesGrid";
import { useRouter } from "next/router";
import { getLink } from "./Navbar";
import PhoneBtn from "./PhoneBtn";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  service: Service;
  settings?: Settings;
  city?: any;
}

const NO_POSTS: Post[] = [];

const Wrapper = styled.div`
  margin: 0rem 0;
  display: flex;
  flex-direction: column;
  /* 
  @media (max-width: 768px) {
    margin-bottom: 5rem;
  } */
`;

const ServiceButton = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #0a3161;
  height: 50px;
  padding: 10px 10px;
  margin: 0 0;
  margin-right: auto;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.3rem;
  font-weight: bolder;
  transition: all ease-in-out 0.5s;
  text-align: left;
  &:hover {
    scale: 1.03;
    background-color: #751318;
  }
  div {
    /* margin-left: 1rem; */
    color: white;
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 1rem;
  }

  @media (min-width: 1704px) {
    font-size: 1.9rem;
  }
  @media (min-width: 760px) and (max-width: 1256px) {
    font-size: 1.9rem;
  }
`;

export default function ServicePage(props: PostPageProps) {
  const { preview, loading, service, settings, city } = props;
  const { title = demo.title } = settings || {};
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add event listener to check screen width on mount and resize
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024); // Adjust the breakpoint as needed
    }

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slug = service?.slug;
  if (!slug && !preview) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* <PostPageHead settings={settings} post={post} /> */}

      <Layout preview={preview} loading={loading}>
        <ServicePageWrapper>
          <div className=" justify-start mx-auto px-16 md:px-10">
            {/* <BlogHeader title={title} level={2} /> */}
            {preview && !service ? (
              <PostTitle>Loading…</PostTitle>
            ) : (
              <Wrapper>
                <ServiceButton
                  onClick={() => {
                    router.push(getLink(city));
                  }}
                >
                  <div className="h-14 w-14">
                    <img src="/service/residential.png" />
                  </div>
                  <span>Home</span>
                </ServiceButton>
                {/* <BackLink href="/" className="ml-0 hover:scale-[1.03]">
                  <span className="text-4xl text-left">Home</span>
                </BackLink> */}
                <ArticleWrapper>
                  <ServiceContainer>
                    {/* <SectionTitle>{service.title}</SectionTitle> */}
                    {/* <RichText>{service?.description}</RichText> */}
                    {/* <ServiceHeader
                      title={service.title}
                      coverImage={service.coverImage}
                    /> */}
                    <PostBody content={service?.description} />
                  </ServiceContainer>
                </ArticleWrapper>
                {/* <SectionSeparator /> */}
              </Wrapper>
            )}
          </div>
        </ServicePageWrapper>
      </Layout>
    </div>
  );
}

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: row;
  margin-top: 0;
  align-items: flex-start;
  ${media("<tablet")} {
    flex-direction: column;
  }
`;
const BackLink = styled(Link)`
  /* padding: 0 18rem; */
  ${media("<=largeDesktop")} {
    /* padding: 0 5rem; */
  }
  ${media("<tablet")} {
    padding: 0 0;
  }
`;
const ServiceContainer = styled.div`
  display: flex;
  border: 2px solid rgb(var(--border));
  flex-direction: column;
  /* align-items: flex-start; */
  ${media("<tablet")} {
    flex-direction: column;
  }
`;
const ServicePageWrapper = styled(NormalContainer)``;
