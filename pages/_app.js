import "/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { goerli } from "wagmi/chains";
import Head from "next/head";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [goerli],
  [
    jsonRpcProvider({ rpc: () => ({ http: "https://rpc.ankr.com/eth" }) }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

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

        <meta name="title" content="Tinyhack" />
        <meta
          name="description"
          content="A project with a goal to create better habits for writing more secure
          contracts."
        />

        <meta property="og:type" content="website" key="og-type" />
        <meta
          property="og:url"
          content="https://tinyhack.vercel.app/"
          key="og-url"
        />
        <meta property="og:title" content="Tinyhack" key="og-title" />
        <meta
          property="og:description"
          content="A project with a goal to create better habits for writing more secure
          contracts."
          key="og-desc"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/ZTS6YFq/tinyhacknewog.png"
          key="og-image"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://tinyhack.vercel.app/"
          key="twt-url"
        />
        <meta property="twitter:title" content="Tinyhack  " key="twt-title" />
        <meta
          property="twitter:description"
          content="A project with a goal to create better habits for writing more secure
          contracts."
          key="twt-desc"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/ZTS6YFq/tinyhacknewog.png"
          key="twt-img"
        />
      </Head>
      <ChakraProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: "#EDF2F7",
              accentColorForeground: "black",
              borderRadius: "small",
              fontStack: "system",
            })}
            coolMode
          >
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
