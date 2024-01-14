import { Flex } from "@chakra-ui/react";
import Projects from "../Components/Projects";
import TransparentHeader from "../Components/TransparentHeader";

function Portfolio() {
  return (
    <>
    <TransparentHeader/>
    <Flex px={35} flexDirection="column" gap={10}>
      <Projects/>
    </Flex>
    </>
  );
}

export default Portfolio;
