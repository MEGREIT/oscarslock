import { media } from "@/utils/media";
// import Container from "components/BlogContainer";
import Layout from "components/BlogLayout";
import PostBody from "components/PostBody";
import PostTitle from "components/PostTitle";
import SectionSeparator from "components/SectionSeparator";
import * as demo from "lib/demo.data";
import type {
  Category,
  Post,
  PrivacyPolicy,
  Service,
  Settings,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import PrivacyPolicyHeader from "@/components/PrivacyPolicyHeader";
import { getClient, getPrivacyPolicy } from "@/sanity/lib/client";
import Container from "@/components/Container";
import { WhiteBackgroundContainer } from "../index";

export interface PostPageProps {
  preview?: boolean;
  loading?: boolean;
  doc: PrivacyPolicy[];
  settings?: Settings;
}

const NO_POSTS: Post[] = [];

const Wrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function TermsConditions(props: PostPageProps) {
  const { preview, loading, doc, settings } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [policyList, setPolicyList] = useState<PrivacyPolicy[]>([]);

  useEffect(() => {
    const client = getClient();
    const fetchPolicies = async () => {
      const policies = await getPrivacyPolicy(client);
      setPolicyList(policies);
    };
    fetchPolicies();

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

  return (
    <>
      {/* <PostPageHead settings={settings} post={post} /> */}

      <Layout preview={preview} loading={loading}>
        <BackContainer>
          <PrivacyPolicyPageWrapper>
            <div className=" mx-0">
              {/* <BlogHeader title={title} level={2} /> */}
              {preview && !doc ? (
                <PostTitle>Loading…</PostTitle>
              ) : (
                <WhiteBackgroundContainer>
                  <Wrapper>
                    <ArticleWrapper>
                      <PrivacyPolicyContainer>
                        <PostBody content={policyList[1]?.content} />
                      </PrivacyPolicyContainer>
                    </ArticleWrapper>
                    {/* <SectionSeparator /> */}
                  </Wrapper>
                </WhiteBackgroundContainer>
              )}
            </div>
          </PrivacyPolicyPageWrapper>
        </BackContainer>
      </Layout>
    </>
  );
}

const ArticleWrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ${media("<tablet")} {
    flex-direction: column;
  }
`;
const BackLink = styled(Link)`
  padding: 0 18rem;
  ${media("<=largeDesktop")} {
    padding: 0 5rem;
  }
  ${media("<tablet")} {
    padding: 0 0;
  }
`;
const PrivacyPolicyContainer = styled.div`
  display: flex;
  border: 2px solid rgb(var(--border));
  flex-direction: column;
  /* align-items: flex-start; */
  ${media("<tablet")} {
    flex-direction: column;
  }
  max-width: 1200px;
`;
const PrivacyPolicyPageWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  @media (min-width: 1280px) {
    /* max-width: 1190px; */
  }
`;
export const BackContainer = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
  padding: 0 10rem;
  padding-top: 5rem;

  & > :last-child {
    /* padding-bottom: 15rem; */
  }

  & > *:not(:first-child) {
    margin-top: 3rem;
  }
  ${media("<=phone")} {
    padding: 0 0;
  }
  ${media(">largeDesktop")} {
    align-items: center;
    /* max-width: 60vw; */
    margin: 0 auto;
  }
  @media (min-width: 375px) and (max-width: 640px) {
    padding: 0 0;
  }
  @media (min-width: 2240px) {
    width: 60vw;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    width: 100vw;
    margin: 0 auto;
  }
`;
