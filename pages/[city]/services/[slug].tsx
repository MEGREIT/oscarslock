import React, { useEffect, useState } from "react";
import { SharedPageProps } from "../../_app";
import styled from "styled-components";
import { GetServerSideProps, GetStaticPathsResult, GetStaticProps } from "next";
import { Service } from "@/sanity/lib/queries";
import {
  getAllServiceSlugs,
  getClient,
  getServiceBySlug,
} from "@/sanity/lib/client";
import { readToken } from "@/sanity/env";
import { useRouter } from "next/router";
import service from "@/sanity/schemas/service";
import ServicePage from "@/components/ServicePage";
import Page from "@/components/Page";
import { urlForImage } from "@/sanity/lib/image";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from "..";
import TextBubble from "@/components/TextBubble";
import Cta from "@/views/HomePage/Cta";
import ServiceCTA from "@/views/HomePage/ServiceCTA";
import { getCityFromPath } from "@/utils/formatString";
import { extractCityFromPath } from "@/components/Navbar";
import { getCityPhone } from "@/utils/getCityPhone";
import PhoneBtn from "@/components/PhoneBtn";

// interface pageProps extends SharedPageProps {
//     service: Service;
// }
interface ServiceProps extends SharedPageProps {
  service: Service;
  slug: any;
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
  const { service } = props;
  const currentPath = router.asPath;

  const slug = getCityFromPath(extractCityFromPath(currentPath));
  const source = service.coverImage.asset?._ref;
  // console.log("service", service);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const [phone, setPhone] = useState<string | null>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const phoneNumber = getCityPhone(slug);
      setPhone(phoneNumber);
    }
  }, [slug]);

  return (
    <Page
      title={service.title}
      description={service.description}
      isService
      imgURL={urlForImage(source).height(1000).width(2000).url()}
      phone={phone}
    >
      <ServiceContainer>
        {phone && <PhoneBtn phone={phone} />}
        <div className="lg:flex xl:align-top lg:space-x-0 pl-5 xl:px-5 md:space-y-0 space-y-2 lg:space-y-0 max-w-[1250px]">
          <ServicePage city={slug} service={service} />
          <PaymentBox>
            <PaymentContainer>
              <img src="/payment.png" />
            </PaymentContainer>
            {phone && <PhoneBtn phone={phone} />}
            <TextBubble />
            <img src="/logos/oscar-logo.png" className="w-[25rem] ml-0" />
          </PaymentBox>
        </div>
        {phone && <PhoneBtn phone={phone} />}
        <ServiceCTA />
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
  const slug = params.slug;
  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
      service,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
