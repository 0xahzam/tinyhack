import Nav from "/components/nav";
import Card from "/components/card";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useAccount } from "wagmi";

export default function problems() {
  const { address, isConnected } = useAccount();
  const [ques, setQues] = useState([]);
  const [highlight, setHighlight] = useState([]);

  async function getQuestions() {
    try {
      const response = await axios.get("/api/script");
      setQues(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      const response = await axios.get("/api/getusers");
      setUsers(response.data);
    } catch (error) {
      // console.error(error);
    }
  }

  useEffect(() => {
    getQuestions();

    if (isConnected) {
      getUsers();
      for (let i = 0; i < users.length; i++) {
        if (address == users[i].wallet) {
          setHighlight(users[i].solved);
          break;
        }
      }
    }
  }, [ques, users]);

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
              solved={highlight.includes(item.id) ? "true" : "false"}
              tag={item.router}
              title={item.title}
            />
          </div>
        ))}
      </Flex>
    </Flex>
  );
}
