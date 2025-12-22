import Head from 'next/head';
import React from 'react';
import { EnvVars } from 'env';
import Script from "next/script";
import GoogleScript from '@/components/Script';

interface MetadataHeadProps {
  title: string;
  description: string;
  author: string;
}

export default function MetadataHead(props: MetadataHeadProps) {
  const { title, description, author } = props;

  return (
  
    <>
    <Head>
      <title>
        {title} | {EnvVars.SITE_NAME}
      </title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
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
     <GoogleScript/>
        </>
     
  );
}
