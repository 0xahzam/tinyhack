import React from "react";
import Nav from "@/components/nav";
import { Flex, Text, Button, Image } from "@chakra-ui/react";

export default function problems() {
  return (
    <Flex
      minH={"100vh"}
      background={"#181818"}
      flexDir={"column"}
      color={"white"}
      cursor={"default"}
    >
      <div>
        <Nav />
      </div>
    </Flex>
  );
}
