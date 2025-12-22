// components/GoogleTagMang.jsx
import React from 'react';
import Script from 'next/script'; // Import the Script component from Next.js

/**
 * GoogleTagMang Component
 * This component embeds the primary Google Tag Manager JavaScript snippet into your Next.js application.
 * It is best placed within the <head> section of your RootLayout for early loading.
 *
 * The 'strategy="afterInteractive"' ensures the script loads after the page becomes interactive,
 * which is a good balance between performance and GTM functionality.
 */
function GoogleTagMang() {
  // Define your Google Tag Manager ID. Replace 'GTM-WPNF8ZTD' with your actual GTM ID.
  const GTM_ID = 'GTM-WPNF8ZTD';

  return (
    <>
      {/*
        The 'Script' component from 'next/script' handles inserting the script into the correct
        place in the HTML (usually the <head>) based on the 'strategy' prop.
        'id' is important for Next.js to track and prevent duplicate scripts.
        'dangerouslySetInnerHTML' is used to inject raw HTML/JavaScript.
        The GTM script initializes the dataLayer and loads the main GTM container.
      */}
      <Script
        id="google-tag-manager" // A descriptive and unique ID for this script
        strategy="afterInteractive" // Loads after the hydration, suitable for analytics scripts
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

export default GoogleTagMang;
