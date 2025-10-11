import BlogMeta from "components/BlogMeta";
import * as demo from "lib/demo.data";
import { urlForImage } from "@/sanity/lib/image";
import { Post, Settings } from "@/sanity/lib/queries";
import Head from "next/head";
import GoogleScript from "./Script";
import Script from "next/script";
export interface PostPageHeadProps {
  settings?: Settings;
  post: Post;
}

export default function PostPageHead({ settings, post }: PostPageHeadProps) {
  const title = settings?.title ?? demo.title;
  return (
    <>
    
    <Head>
      <title>{post.title ? `${post.title} | ${title}` : title}</title>
      <BlogMeta />
      {post.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(post.coverImage)
            .width(1200)
            .height(627)
            .fit("crop")
            .url()}
        />
      )}


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
