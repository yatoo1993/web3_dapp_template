import { Flex } from "@chakra-ui/react";
import ConnectButton from "../components/ConnectButton";

export default function PageIndex() {
  return (
    <Flex height={'100vh'} flexDir={'column'}>
        <ConnectButton />
    </Flex>
  )
}
