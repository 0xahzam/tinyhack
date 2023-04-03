import { Flex, Text, Button, Input } from "@chakra-ui/react";
import Nav from "/components/nav";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAccount } from "wagmi";
import Image from "next/image";
import info from "../../public/info.svg";
import SyntaxHighlighter from "react-syntax-highlighter";
import { cb } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ques() {
  const { address, isConnected } = useAccount();
  const router = useRouter();
  const { id } = router.query;
  const [ques, setQues] = useState([]);
  const [line, setLine] = useState("");
  const [attack, setAttack] = useState("");

  async function getQuestions() {
    try {
      const response = await axios.get("/api/script");
      setQues(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getQuestions();
  }, [ques]);

  return (
    <Flex
      className="font"
      minH={"100vh"}
      background={"#181818"}
      flexDir={"column"}
      color={"white"}
      cursor={"default"}
      align={"center"}
    >
      <Nav />

      {ques.map((item) => (
        <div key={item.id}>
          {id != item.router ? (
            <div>{item.router}</div>
          ) : (
            <Flex mt={"92px"} w={"1302px"} justifyContent={"space-between"}>
              <Flex
                w={"704px"}
                border={"1px solid rgba(255, 255, 255, 0.1)"}
                bg={"#222222"}
                borderRadius={"7px"}
              >
                <Flex
                  className="mono"
                  fontSize={"14px"}
                  fontWeight={"400px"}
                  color={"white"}
                  m={"20px"}
                >
                  <SyntaxHighlighter
                    language="solidity"
                    lineProps={{
                      style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
                    }}
                    wrapLines={true}
                    showLineNumbers={true}
                    style={cb}
                  >
                    {item.contract}
                  </SyntaxHighlighter>
                </Flex>
              </Flex>

              <Flex flexDir={"column"} gap={"29px"} w={"507px"}>
                <Flex flexDir={"column"} gap={"16px"}>
                  <Text fontSize={"21px"}>{item.title}</Text>
                  <Text
                    className="sub"
                    opacity={"80%"}
                    fontSize={"18px"}
                    lineHeight={"20.75px"}
                    fontWeight={"normal"}
                  >
                    {item.description}
                  </Text>
                </Flex>
                {isConnected ? (
                  <>
                    <Flex flexDir={"column"} gap={"16px"}>
                      <Text fontSize={"21px"}>
                        Identify the vulnerable line
                      </Text>
                      <Input
                        border={"1px solid rgba(255, 255, 255, 0.1)"}
                        bg={"rgba(255, 255, 255, 0.03)"}
                        borderRadius={"4px"}
                        h={"49px"}
                        _active={{
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        _hover={{
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        focusBorderColor={"rgba(255, 255, 255, 0.2)"}
                        onChange={(e) => setLine(e.target.value)}
                      />
                    </Flex>
                    <Flex flexDir={"column"} gap={"16px"}>
                      <Text fontSize={"21px"}>Identify the attack type</Text>
                      <Input
                        border={"1px solid rgba(255, 255, 255, 0.1)"}
                        bg={"rgba(255, 255, 255, 0.03)"}
                        borderRadius={"4px"}
                        h={"49px"}
                        _active={{
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        _hover={{
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                        focusBorderColor={"rgba(255, 255, 255, 0.2)"}
                        onChange={(e) => setAttack(e.target.value)}
                      />
                    </Flex>
                    <Flex gap={"20px"} align={"center"}>
                      <Button
                        w={"158px"}
                        h={"41px"}
                        bg={"#528D51"}
                        borderRadius={"4px"}
                        color={"white"}
                        fontWeight={"400"}
                        fontSize={"18px"}
                        _hover={{
                          background: "#497E48",
                          boxShadow: "0px 1px 12px rgba(255,255,255,0.05)",
                        }}
                        onClick={() => {
                          if (line == item.line) {
                            if (attack == item.typeattack) {
                              console.log("TRUE");
                            }
                          }
                        }}
                      >
                        Submit Answers
                      </Button>
                      <Flex gap={"5px"} align={"center"} opacity={"60%"}>
                        <Image src={info} height={16} width={16} alt={"info"} />
                        <Text>Hint</Text>
                      </Flex>
                    </Flex>
                  </>
                ) : (
                  <Flex opacity={"60%"} gap={"5px"}>
                    <Image src={info} height={16} width={16} alt={"info"} />
                    <Text fontSize={"18px"}>
                      Please connect wallet to solve this problem
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Flex>
          )}
        </div>
      ))}
    </Flex>
  );
}
