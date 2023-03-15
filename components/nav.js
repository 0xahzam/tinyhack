import {
  Flex,
  Text,
  useColorMode,
  Image,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
export default function Nav() {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const [header, setHeader] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {
    const path = router.asPath;
    if (path == "/proposal") {
      setHeader("proposal");
    } else if (path == "/progress") {
      setHeader("progress");
    }
  }, [router.asPath]);

  return (
    <>
      <Flex
        gap={{ base: "200px", md:"500px", lg: "800px", xl: "1021px" }}
        align={"center"}
        mt={"42px"}
        color={"black"}
        _dark={{ color: "white" }}
      >
        <Link href={"./"}>
          <Text fontSize={"21px"} fontWeight={"semibold"}>
            tinyhack
          </Text>
        </Link>
        <Flex gap={"18px"} align={"center"}>
          <Flex gap={"18px"} display={{ base: "none", lg: "flex", xl: "flex" }}>
            <Link href={"./proposal"}>
              <Text
                fontSize={"21px"}
                fontWeight={"normal"}
                textDecor={header == "proposal" ? "underline" : ""}
                opacity={"100%"}
                _hover={
                  header == "proposal"
                    ? { opacity: "100%" }
                    : { opacity: "80%" }
                }
              >
                proposal
              </Text>
            </Link>
            <Text
              fontSize={"21px"}
              fontWeight={"normal"}
              textDecor={header == "progress" ? "underline" : ""}
              opacity={"100%"}
              _hover={
                header == "progress" ? { opacity: "100%" } : { opacity: "80%" }
              }
            >
              progress
            </Text>
          </Flex>

          <Flex
            gap={"18px"}
            display={{ base: "flex", lg: "none", xl: "none" }}
            ref={btnRef}
            onClick={onOpen}
          >
            <Image
              src={colorMode != "dark" ? "menu_black.svg" : "menu_white.svg"}
              alt={colorMode != "dark" ? "menu dark" : "menu white"}
              h={"24px"}
              w={"24px"}
            />
          </Flex>

          {colorMode != "dark" ? (
            <Image
              onClick={toggleColorMode}
              src={"sun.svg"}
              alt={"sun"}
              cursor={"pointer"}
            />
          ) : (
            <Image
              onClick={toggleColorMode}
              src={"moon.svg"}
              alt={"moon"}
              cursor={"pointer"}
            />
          )}
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"xs"}
      >
        <DrawerOverlay
          _dark={{ background: "rgba(35,35,35,0.3)", color: "white" }}
        />
        <DrawerContent
          background={"#FAFBF6"}
          color={"black"}
          _dark={{ background: "#657039", color: "white" }}
        >
          <DrawerCloseButton _active={{}} />

          <DrawerBody marginTop={"40px"}>
            <Flex gap={"18px"} flexDir={"column"}>
              <Link href={"./proposal"}>
                <Text
                  fontSize={"21px"}
                  fontWeight={"normal"}
                  textDecor={header == "proposal" ? "underline" : ""}
                  opacity={"100%"}
                  _hover={
                    header == "proposal"
                      ? { opacity: "100%" }
                      : { opacity: "80%" }
                  }
                >
                  proposal
                </Text>
              </Link>
              <Text
                fontSize={"21px"}
                fontWeight={"normal"}
                textDecor={header == "progress" ? "underline" : ""}
                opacity={"100%"}
                _hover={
                  header == "progress"
                    ? { opacity: "100%" }
                    : { opacity: "80%" }
                }
              >
                progress
              </Text>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
