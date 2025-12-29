import "tailwindcss/tailwind.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./style.css";

import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import Router, { useRouter } from "next/router";
import dynamic from "next/dynamic";

// --- 1. DYNAMIC IMPORTS (The Secret Fix) ---
// We DO NOT import anything at the top. We only load them if needed.
const GlobalStyle = dynamic(() => import("components/GlobalStyles").then(mod => mod.GlobalStyle), { ssr: false });
const Navbar = dynamic(() => import("components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("components/Footer"), { ssr: false });
const NavigationDrawer = dynamic(() => import("components/NavigationDrawer"), { ssr: false });
const NewsletterModal = dynamic(() => import("components/NewsletterModal"), { ssr: false });
const CookieBanner = dynamic(() => import("@/components/CookieBanner"), { ssr: false });
const CallUsNowBtn = dynamic(() => import("@/components/CallUsNowBtn"), { ssr: false });
const Spinner = dynamic(() => import("components/Spinner"), { ssr: false });

// Context needs special handling, we wrap it in the MainLayout dynamically
import { NewsletterModalContextProvider } from "contexts/newsletter-modal.context";
import { useNewsletterModalContext } from "contexts/newsletter-modal.context";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

// --- 2. SAFE LAYOUT (For Policy Pages ONLY) ---
// Pure HTML/CSS. No Imports. No Sanity. No Crash.
const SafeLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="font-sans flex flex-col min-h-screen">
    <div className="bg-white p-4 shadow-md text-center">
      <a href="/">
        <img src="/logos/oscar-logo.png" alt="Logo" className="h-12 inline-block" />
      </a>
    </div>

    <main className="flex-1">
      {children}
    </main>

    <div className="bg-[#15233e] text-white p-8 text-center">
      <p>© 2024 Oscar's Lock & Key Services.</p>
      <div className="mt-4 space-x-4">
        <a href="/" className="text-white hover:underline">Home</a>
        <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a>
        <a href="/terms-conditions" className="text-white hover:underline">Terms & Conditions</a>
      </div>
    </div>
  </div>
);

// --- 3. MAIN SITE LAYOUT (Original) ---
// We load all the heavy stuff HERE, so it never touches the Policy pages.
const MainSiteLayout = ({ children }: { children: React.ReactNode }) => {
  const [closestCity, setClosestCity] = useState<any | null>(null);

  const Modals = () => {
    // We handle the modal logic safely here
    try {
      const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
      return isModalOpened ? <NewsletterModal onClose={() => setIsModalOpened(false)} /> : null;
    } catch (e) {
      return null;
    }
  };

  return (
    <>
      <GlobalStyle />
      <NewsletterModalContextProvider>
        <NavigationDrawer items={navItems}>
          <Modals />
          <Navbar items={navItems} currentCity={closestCity} />
          {children}
          <CookieBanner />
          <CallUsNowBtn />
          <Footer currentCity={closestCity} />
        </NavigationDrawer>
      </NewsletterModalContextProvider>
    </>
  );
};

// --- 4. APP COMPONENT ---
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // CHECK: Is this a policy page?
  const isPolicyPage = router.pathname === '/privacy-policy' || router.pathname === '/terms-conditions';

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
        <link rel="icon" type="image/png" href="/logos/LOGO.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      {/* NO GlobalStyle Here! It is moved inside MainSiteLayout */}
      
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
           {/* Simple loading text if Spinner fails */}
           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-700"></div>
        </div>
      ) : (
        <>
          {isPolicyPage ? (
  // Just render the component directly without SafeLayout
  <Component {...pageProps} />
) : (
  <MainSiteLayout>
    <Component {...pageProps} />
  </MainSiteLayout>
)}
        </>
      )}
    </>
  );
}

export default MyApp;