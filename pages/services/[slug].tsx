import React from "react";
import { SharedPageProps } from "../_app";
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { Service } from "@/sanity/lib/queries";
import { getClient, getServiceBySlug } from "@/sanity/lib/client";
import { readToken } from "@/sanity/env";
import { useRouter } from "next/router";
import ServicePage from "@/components/ServicePage";
import Page from "@/components/Page";
import { urlForImage } from "@/sanity/lib/image";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from "..";
import TextBubble from "@/components/TextBubble";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import { getCityFromPath } from "@/utils/formatString";
import { extractCityFromPath } from "@/components/Navbar";
import PhoneBtn from "@/components/PhoneBtn";

interface ServiceProps extends SharedPageProps {
  service: Service;
}

interface Query {
  [key: string]: string;
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
const ServiceContainer = styled(WhiteBackgroundContainer)`
  padding-top: 0rem;
`;
const Title = styled.div`
  font-size: xx-large;
  font-weight: bold;
`;

export default function ServiceSlugRoute(props: ServiceProps) {
  const router = useRouter();
  const currentPath = router.asPath;
  const currentCity = getCityFromPath(extractCityFromPath(currentPath));
  const { service } = props;
  const source = service.coverImage.asset?._ref;
  // console.log("service", service);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Page
      title={service.title}
      description={service.description}
      isService
      imgURL={urlForImage(source).height(1000).width(2000).url()}
    >
      <ServiceContainer>
        <PhoneBtn phone="(508) 736-7178" />
        <div className="lg:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 md:space-y-0 space-y-2 lg:space-y-0 max-w-[1250px]">
          <ServicePage service={service} city={currentCity} />
          <PaymentBox>
            <PaymentContainer>
              <img src="/payment.png" />
            </PaymentContainer>
            <PhoneBtn phone="(508) 736-7178" />
            <TextBubble />
            <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" />
          </PaymentBox>
        </div>
        <ServiceCTA />
        <PhoneBtn phone="(800) 687- 0480" />
        <button
          onClick={() => {
            router.push("/coupons");
          }}
          className="bg-[#751318] text-2xl px-32 py-2 text-white mx-auto"
        >
          FOR COUPONS CLICK HERE
        </button>
      </ServiceContainer>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<
  ServiceProps,
  Query
> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  const client = getClient(draftMode ? { token: readToken } : undefined);
  const [service] = await Promise.all([getServiceBySlug(client, params.slug)]);

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
