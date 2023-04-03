import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Card({ solved, tag, title }) {
  const url = `/problems/${tag}`;
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "100%" }}
      transition={{ duration: "0.2", type: "linear" }}
    >
      <Link href={url}>
        <Flex
          h={"66px"}
          w={"1158px"}
          background={
            solved == "true"
              ? "rgba(255, 255, 255, 0.04)"
              : "rgba(255, 255, 255, 0.03)"
          }
          border={
            solved == "true"
              ? "1px solid rgba(255, 255, 255, 0.2)"
              : "1px solid rgba(255, 255, 255, 0.1)"
          }
          borderRadius={"7px"}
          opacity={solved == "true" ? "100%" : "60%"}
        >
          <Flex
            marginLeft={"30px"}
            marginRight={"30px"}
            w={"1158px"}
            gap={"30px"}
            fontSize={"18px"}
            align={"center"}
          >
            {/* <Text>{tag}&gt;</Text> */}
            <Text>{title}</Text>
          </Flex>
        </Flex>
      </Link>
    </motion.div>
  );
}
