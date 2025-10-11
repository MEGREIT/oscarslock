import Script from 'next/script'; // Make sure this import is present

export default function GoogleScript() {
  return (
    <>
       <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=AW-16900805184`}
              strategy="afterInteractive" // Recommended strategy for analytics
            />
    
            {/* Google Tag (gtag.js) - Inline Configuration and Event Tracking */}
            <Script
              id="google-ads-config-and-conversion" // A more descriptive ID for this script
              strategy="afterInteractive" // Recommended strategy for analytics
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16900805184'); // Your main Google Ads config
    
          // Your existing window.addEventListener 'load' function for click tracking
          window.addEventListener('load', function() {
            // Ensure jQuery is loaded before trying to use it
            if (typeof jQuery !== 'undefined') {
              jQuery('[href*="tel:"]').click(function() {
                gtag('event', 'conversion', {
                  'send_to': 'AW-16900805184/0mMHCJiNo9kaEMCk9_o-' // Your specific conversion ID
                });
              });
            } else {
              console.warn('jQuery is not loaded. The click tracking for tel links will not work.');
            }
          });
        `,
              }}
            />
     </>
  )}
