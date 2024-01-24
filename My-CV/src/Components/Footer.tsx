import { Box, Flex, IconButton, Link, Tooltip } from "@chakra-ui/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <Flex
      align="center"
      justify="space-between"
      p="4"
      bg="transparent"
      backgroundColor="none"
    >
      <Box>
        © 2024 Your Company. All rights reserved.
      </Box>

      <Box>
        <Tooltip label="GitHub" hasArrow>
          <Link href="https://github.com/lauax" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="md"
              colorScheme="black"
            />
          </Link>
        </Tooltip>

        <Tooltip label="Mail" hasArrow>
          <Link href="mailto:Lucas12alfredsson@gmail.com" isExternal mx="2">
            <IconButton
              aria-label="Mail"
              icon={<FaEnvelope />}
              size="md"
              colorScheme="black"
            />
          </Link>
        </Tooltip>
      </Box>
    </Flex>
  );
}

export default Footer;
