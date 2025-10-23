import "tailwindcss/tailwind.css";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";

import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import { ColorModeScript } from "nextjs-color-mode";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Script from "next/script";

import Footer from "components/Footer";
import { GlobalStyle } from "components/GlobalStyles";
import Navbar from "components/Navbar";
import NavigationDrawer from "components/NavigationDrawer";
import NewsletterModal from "components/NewsletterModal";
import WaveCta from "components/WaveCta";
import {
  NewsletterModalContextProvider,
  useNewsletterModalContext,
} from "contexts/newsletter-modal.context";
import { NavItems } from "types";
import citiesData from "@/utils/cities_data.json";
import Router from "next/router";
import Spinner from "components/Spinner";
import CompanyFooter from "@/components/CompanyFooter";
import StickySocialMediaBar from "@/components/StickySocialMediaBar";
import CookieBanner from "@/components/CookieBanner";
import { useRouter } from "next/router";
import { getCityPhone } from "@/utils/getCityPhone";
import CallUsNowBtn from "@/components/CallUsNowBtn";

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}
const navItems: NavItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

export function getFirstSubroute(url: string): string | null {
  const parts = url.replace(/^\/+|\/+$/g, "").split("/");
  return parts.length > 0 ? parts[0] : null;
}

export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  const toRadians = (angle: number) => (Math.PI / 180) * angle;
  const R = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [closestCity, setClosestCity] = useState<any | null>(null);

  useEffect(() => {
    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/logos/LOGO.png" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6WCSKJXF5T"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6WCSKJXF5T');
        `}
      </Script>
      <ColorModeScript />
      <GlobalStyle />
      {loading ? (
        <Spinner />
      ) : (
        <Providers>
          <Modals />
          <Navbar items={navItems} currentCity={closestCity} />
          <Component {...pageProps} />
          <CookieBanner />
          <CallUsNowBtn />
          <Footer currentCity={closestCity} />
        </Providers>
      )}
    </>
  );
}

function Providers({ children }: PropsWithChildren) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  );
}

function Modals() {
  // 1. Call the hook unconditionally at the top.
  const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();

  // 2. Use the state for conditional rendering *after* all hooks have been called.
  return (
    <>
      {isModalOpened && (
        <NewsletterModal onClose={() => setIsModalOpened(false)} />
      )}
    </>
  );
  // Or simply:
  // return isModalOpened ? <NewsletterModal onClose={() => setIsModalOpened(false)} /> : null;
}

export default MyApp;
