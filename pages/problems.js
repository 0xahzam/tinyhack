import Nav from "@/components/nav";
import Card from "@/components/card";
import { Flex } from "@chakra-ui/react";
export default function problems() {
  return (
    <Flex
      className="font"
      minH={"100vh"}
      background={"#181818"}
      flexDir={"column"}
      color={"white"}
      cursor={"default"}
    >
      <Nav />
      <Flex
        gap={"20px"}
        flexDir={"column"}
        marginTop={"60px"}
        marginBottom={"60px"}
        align={"center"}
      >
        <Card solved={"true"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
        <Card solved={"false"} tag={"DEFI"} title={"Uniswap Validation"} />
      </Flex>
    </Flex>
  );
}
