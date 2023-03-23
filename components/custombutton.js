import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@chakra-ui/react";
import { useAccount } from "wagmi";

export const ConnectBtn = () => {
  const breakpoints = {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  };
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    background={"rgba(255, 255, 255, 0.04)"}
                    height={"39px"}
                    paddingRight={"20px"}
                    paddingLeft={"20px"}
                    borderRadius={"4px"}
                    border={"1px solid rgba(255, 255, 255, 0.2)"}
                    _hover={{}}
                    _active={{}}
                    fontSize={"21px"}
                    fontWeight={"medium"}
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    type="button"
                    background={"rgba(255, 255, 255, 0.04)"}
                    height={"39px"}
                    paddingRight={"20px"}
                    paddingLeft={"20px"}
                    borderRadius={"4px"}
                    border={"1px solid rgba(255, 255, 255, 0.2)"}
                    _hover={{}}
                    _active={{}}
                    fontSize={"21px"}
                    fontWeight={"medium"}
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    onClick={openAccountModal}
                    type="button"
                    background={"rgba(255, 255, 255, 0.04)"}
                    height={"39px"}
                    paddingRight={"20px"}
                    paddingLeft={"20px"}
                    borderRadius={"4px"}
                    border={"1px solid rgba(255, 255, 255, 0.2)"}
                    _hover={{}}
                    _active={{}}
                    fontSize={"21px"}
                    fontWeight={"medium"}
                  >
                    Connected
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};