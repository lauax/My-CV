import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function TransparentHeader() {
  return (
    <Flex px={35} flexDirection="column" gap={10}>
      <Heading>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/past-experiences">Past Experiences</Link>
      </Heading>
    </Flex>
  );
}

export default TransparentHeader;
