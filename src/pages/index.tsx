import { Flex, Text } from "@chakra-ui/react";
import ConnectButton from "../components/ConnectButton";

export default function PageIndex() {
  return (
    <Flex height={"100vh"} flexDir={"column"}>
      <ConnectButton />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
    </Flex>
  );
}
