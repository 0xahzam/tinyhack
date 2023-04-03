import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import user from "../public/user.svg";

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
                    height={"47px"}
                    paddingRight={"20px"}
                    paddingLeft={"20px"}
                    borderRadius={"4px"}
                    border={"1px solid rgba(255, 255, 255, 0.2)"}
                    _hover={{
                      background: "rgba(255, 255, 255, 0.02)",
                      boxShadow: "0px 1px 12px rgba(255,255,255,0.05)",
                    }}
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
                    height={"47px"}
                    paddingRight={"20px"}
                    paddingLeft={"20px"}
                    borderRadius={"4px"}
                    border={"1px solid rgba(255, 255, 255, 0.2)"}
                    _hover={{
                      background: "rgba(255, 255, 255, 0.02)",
                      boxShadow: "0px 1px 12px rgba(255,255,255,0.05)",
                    }}
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
                    height={"47px"}
                    paddingRight={"20px"}
                    paddingLeft={"20px"}
                    borderRadius={"4px"}
                    border={"1px solid rgba(255, 255, 255, 0.2)"}
                    _hover={{
                      background: "rgba(255, 255, 255, 0.02)",
                      boxShadow: "0px 1px 12px rgba(255,255,255,0.05)",
                    }}
                    _active={{}}
                    fontSize={"21px"}
                    fontWeight={"medium"}
                  >
                    {addr}
                  </Button>
                  <Flex display={isConnected ? "flex" : "none"} opacity={"80%"}>
                    <Image src={user} alt={"user"} height={24} width={24} />
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
