import { Flex, Text, Button, Image } from "@chakra-ui/react";

const art = `
████████╗██╗███╗   ██╗██╗   ██╗    ██╗  ██╗ █████╗  ██████╗██╗  ██╗
╚══██╔══╝██║████╗  ██║╚██╗ ██╔╝    ██║  ██║██╔══██╗██╔════╝██║ ██╔╝
   ██║   ██║██╔██╗ ██║ ╚████╔╝     ███████║███████║██║     █████╔╝ 
   ██║   ██║██║╚██╗██║  ╚██╔╝      ██╔══██║██╔══██║██║     ██╔═██╗ 
   ██║   ██║██║ ╚████║   ██║       ██║  ██║██║  ██║╚██████╗██║  ██╗
   ╚═╝   ╚═╝╚═╝  ╚═══╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
`;

console.log(art);

export default function index() {
  return (
    <Flex
      background={"#181818"}
      flexDir={"column"}
      color={"white"}
      cursor={"default"}
    >
      <Flex h={"100vh"} gap={"76px"} flexDir={"column"} overflowY={"hidden"}>
        <Flex
          marginTop={"113px"}
          flexDir={"column"}
          align={"center"}
          gap={"28.72px"}
        >
          <Flex gap={"16px"} flexDir={"column"} align={"center"}>
            <Text fontSize={"34px"} fontWeight={"bold"}>
              Tinyhack
            </Text>
            <Text
              className="sub"
              fontSize={"26px"}
              fontWeight={"normal"}
              w={"584px"}
              textAlign={"center"}
              opacity={"85%"}
            >
              a project built under{" "}
              <a
                href={"https://eif3.devfolio.co/"}
                target={"_blank"}
                rel={"noreferrer"}
                style={{ textDecoration: "underline" }}
              >
                EIF 3.0
              </a>{" "}
              with a goal to create better habits for writing more secure
              contracts.
            </Text>
          </Flex>
          <Flex gap={"20.35px"}>
            <Button
              height={"47px"}
              paddingRight={"25px"}
              paddingLeft={"25px"}
              rounded={"4px"}
              bg={"#528D51"}
              fontSize={"20px"}
              fontWeight={"normal"}
              _hover={{ background: "" }}
              _active={{}}
            >
              Start Solving
            </Button>
            <Button
              height={"47px"}
              paddingRight={"25px"}
              paddingLeft={"25px"}
              rounded={"4px"}
              bg={"rgba(255, 255, 255, 0.04)"}
              border={"1px solid rgba(255, 255, 255, 0.1)"}
              fontSize={"20px"}
              fontWeight={"normal"}
              _hover={{}}
              _active={{}}
            >
              Learn First
            </Button>
          </Flex>
        </Flex>

        <Flex justify={"center"} userSelect={"none"}>
          <Image src={"hero.svg"} alt={"hero"} />
        </Flex>
      </Flex>
    </Flex>
  );
}
