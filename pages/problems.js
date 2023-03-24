import Nav from "/components/nav";
import Card from "/components/card";
import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

function problems({ data }) {
  const [ques, setQues] = useState(data);
  const highlight = [0];

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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_FETCH}/api/script`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default problems;
