import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, Flex, Image } from "@chakra-ui/react";

export const ConnectBtn = () => {
  const { address, isConnected } = useAccount();
  const [addr, setAddr] = useState();

  useEffect(() => {
    isConnected
      ? setAddr(
          address.slice(0, 4) +
            "..." +
            address.slice(-5, -1) +
            address.charAt(address.length - 1)
        )
      : "";
  }, [address, isConnected]);

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
                <Flex gap={"20px"}>
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
                    {addr}
                  </Button>
                  <Flex display={isConnected ? "flex" : "none"}>
                    <Image src={"user.svg"} alt={"user"} opacity={"80%"} />
                  </Flex>
                </Flex>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
