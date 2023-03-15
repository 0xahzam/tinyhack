import { Flex } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import Nav from "@/components/nav";

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
      minH={"100vh"}
      background={"#FAFBF6"}
      _dark={{ background: "#657039", color: "white" }}
      flexDir={"column"}
      align={"center"}
      color={"black"}
      cursor={"default"}
    >
      <Nav />

      <Flex align={"center"} h={"90vh"}>
        <Flex
          fontSize={{ base: "28px", md: "32px", lg: "45px", xl: "55px" }}
          fontWeight={"semibold"}
          w={{ base: "250px", md: "400px", lg: "679px", xl: "679px" }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("securing smart contracts made easy.")
                .pauseFor(2500)
                .deleteAll()
                .typeString(
                  "making it easier and accessible to write more secure contracts."
                )
                .start();
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
