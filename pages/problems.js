import Nav from "/components/nav";
import Card from "/components/card";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function problems() {
  const [ques, setQues] = useState([]);
  const highlight = [0];
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
    >
      <Nav />
      <Flex
        gap={"20px"}
        flexDir={"column"}
        marginTop={"60px"}
        marginBottom={"60px"}
        align={"center"}
        color={"white"}
      >
        {ques.map((item) => (
          <div key={item.id}>
            <Card
              solved={item.id in highlight ? "true" : "false"}
              tag={item.tag}
              title={item.title}
            />
          </div>
        ))}
      </Flex>
    </Flex>
  );
}
