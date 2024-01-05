import { Flex } from "@chakra-ui/react";
import TransparentHeader from "../Components/TransparentHeader";

function Home() {
  return (
    <Flex px={35} flexDirection="column" gap={10}>
      <TransparentHeader></TransparentHeader>
    </Flex>
  );
}

export default Home;
