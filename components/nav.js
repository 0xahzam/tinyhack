import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { ConnectBtn } from "/components/custombutton";
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  const [header, setHeader] = useState("");

  useEffect(() => {
    const path = router.asPath;
    if (path == "/problems") {
      setHeader("problems");
    } else if (path == "/rankings") {
      setHeader("rankings");
    } else if (path == "/learn") {
      setHeader("learn");
    }
  }, [router.asPath]);

  return (
    <Flex
      w={"100%"}
      justify={"center"}
      borderBottom={"1px solid rgba(255, 255, 255, 0.2)"}
    >
      <Flex
        h={"94px"}
        w={"1302px"}
        justifyContent={"space-between"}
        align={"center"}
      >
        <Flex gap={"25px"} align={"center"}>
          <Link href="./">
            <Text fontSize={"26px"} fontWeight={"bold"} userSelect={"none"}>
              Tinyhack
            </Text>
          </Link>
          <Flex gap={"16px"} align={"center"}>
            <Link href={"./problems"}>
              <Text
                fontSize={"21px"}
                textDecor={header == "problems" ? "underline" : ""}
              >
                Problems
              </Text>
            </Link>
            <Text fontSize={"21px"}>Rankings</Text>
            <Text fontSize={"21px"}>Start Learning</Text>
          </Flex>
        </Flex>
        <ConnectBtn />
      </Flex>
    </Flex>
  );
}
