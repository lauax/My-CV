import { Flex } from "@chakra-ui/react";
import ImageHome from "../Components/ImageHome";
import TransparentHeader from "../Components/TransparentHeader";

function Home() {
  return (
    <Flex px={35} flexDirection="column" gap={10} paddingTop="5.5rem">
      <TransparentHeader></TransparentHeader>
      <ImageHome/>
    </Flex>
  );
}

export default Home;
