import React from "react";
import Head from "next/head";

const DOMAIN = "https://www.hallokarla.de";
const DEFAULT_OG_IMAGE = "https://hallokarla.de/images/home.webp";

type Props = {
  title: string;
  description: string;
  siteName: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
};

/**
 * SEO Component: SEO Controller
 * @return {JSX.Element} JSX code for SEO configurations
 */

export default function Seo({
  title = "Mengu Medicals",
  description = "Mengu Medicals application.",
  siteName = "Mengu Medicals",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "",
}: Props): JSX.Element {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title key="title">{`${title}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical ?? DOMAIN} />

      <link rel="icon" href="/icons/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        href="/icons/android-chrome-192x192.png"
        sizes="192x192"
      />
      <link
        rel="icon"
        type="image/png"
        href="/icons/android-chrome-512x512.png"
        sizes="512x512"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />

      <link rel="alternate" href="" hrefLang="x-default" />
      <link rel="alternate" href="" hrefLang="en" />
      <link rel="alternate" href="/de" hrefLang="de" />
    </Head>
  );
}
