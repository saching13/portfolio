import { getCurrentUrl } from "@/utils/url";
import Head from "next/head";
import React from "react";

interface MetaDataProps {
  title?: string;
  description?: string;
  bannerUrl?: string;
  currentUrl: string;
}

const MetaData: React.VFC<MetaDataProps> = ({
  title = "Sachin Guruswamy — Computer Vision Roboticist",
  description = "I am located in San Francisco Bay Area.",
  bannerUrl = getCurrentUrl("/meta-preview.png"),
  currentUrl,
}) => {
  return (
    <Head>
      <title key="beans">{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={bannerUrl} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={bannerUrl} />
    </Head>
  );
};

export default MetaData;
