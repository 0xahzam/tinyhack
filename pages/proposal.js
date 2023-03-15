import { Flex, Text } from "@chakra-ui/react";
import Nav from "@/components/nav";
import { motion } from "framer-motion";

export default function index() {
  return (
    <Flex
      minH={"100vh"}
      background={"#FAFBF6"}
      flexDir={"column"}
      align={"center"}
      color={"black"}
      _dark={{ background: "#657039", color: "white" }}
      cursor={"default"}
    >
      <Nav />
      <Flex align={"center"} mt={"60px"} mb={"60px"}>
        <motion.div
          initial={{ y: "0%", opacity: "0" }}
          animate={{ y: "0", opacity: "100%" }}
          transition={{ delay:0.25 }}
        >
          <Flex
            flexDir={"column"}
            w={["300px", "300px", "662px"]}
            fontWeight={"normal"}
            fontSize={"19px"}
            gap={"23px"}
          >
            <Text>
              smart contracts which are to be deployed for real-world use-cases,
              by real people, need to be secure. the crypto lost owing to poor
              security is in the millions & to set the standard for a secure
              smart contract, it must follow basic but key checks. enters
              tinyhack, a tool which can tell you on-the-fly where you're
              leaving room for adversaries to enter, what attacks your contract
              will be prone to, if deployed.
            </Text>

            <Text>
              proposal — a dev tool which takes your evm smart-contracts written
              in solidity and runs it through various layers of security checks,
              simulating many kinds of syntactical, semantical vulnerabilities,
              gas optimizations and attacks [hacks] which have happened
              previously on evm smart-contracts — returning a simulated audit of
              security weaknesses while also flagging the lines which could make
              the contract prone to attacks and offering potential optimized
              solutions.
            </Text>

            <Text>
              there are many pre-security checklists, vulnerability test cases,
              and static contract analysis out there and what we wish to do is —
              bundle them all in together, automate the process and wrap it
              under an impressive ux so that any programmer can start using it
              right away and deploy better and more safer contracts.
            </Text>

            <Text>
              who is this for? regular programmers working with smart contracts
              for learning purposes, a tool for them to use to improve upon
              their existing coding conventions & styles without having to pay
              to put their product&apos;s code through an enterprise-level
              audit. this sets a higher standard for contract code amongst the
              web3 community, and sets the security rigor stronger for smart
              contract development
            </Text>
          </Flex>
        </motion.div>
      </Flex>
    </Flex>
  );
}
