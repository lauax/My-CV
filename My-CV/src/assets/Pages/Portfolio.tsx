import { Flex } from "@chakra-ui/react";
import Projects from "../Components/Projects";
import TransparentHeader from "../Components/TransparentHeader";

function Portfolio() {
  return (
    <>
        <TransparentHeader />
        <Flex flexDirection="column">
          <Projects />
        </Flex>
    </>
  );
}

export default Portfolio;
