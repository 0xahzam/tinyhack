import "@/styles/globals.css";
import "@fontsource/space-grotesk";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>tinyhack</title>
        <meta
          name="viewport"
          key="main"
          content="width=device-width, initial-scale=1.0"
        />

        <meta name="title" content="tinyhack" />
        <meta
          name="description"
          content="your friendly neighbourhood smart contract bodyguard"
        />

        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="og:url"
          content="https://tinyhack.vercel.app/"
          key="og-url"
        />
        <meta property="og:title" content="tinyhack" key="og-title" />
        <meta
          property="og:description"
          content="your friendly neighbourhood smart contract bodyguard"
          key="og-desc"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/nMxgTNG/tinyhackog.png"
          key="og-image"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://tinyhack.vercel.app/"
          key="twt-url"
        />
        <meta property="twitter:title" content="tinyhack  " key="twt-title" />
        <meta
          property="twitter:description"
          content="your friendly neighbourhood smart contract bodyguard"
          key="twt-desc"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/nMxgTNG/tinyhackog.png"
          key="twt-img"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
