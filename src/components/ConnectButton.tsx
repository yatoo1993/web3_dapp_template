import { Button } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function ConnectButton() {
    const { openConnectModal } = useConnectModal();
  return <Button color={"white"} bgColor={"primary.100"} onClick={() => openConnectModal?.()}>
    连接
  </Button>;
}
