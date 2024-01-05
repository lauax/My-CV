import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function TransparentHeader() {
  return (
    <Flex px={35} py={3} justify="space-between" align="center" color="grey" opacity="0.4" height="15vh">
      <Heading>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/past-experiences">Past Experiences</Link>
      </Heading>
    </Flex>
  );
}

export default TransparentHeader;
