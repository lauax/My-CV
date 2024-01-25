import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import ImageLogo from "../Images/logo.png";

function TransparentHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <Flex px={35} py={3} justify="space-between" align="center" bg="transparent" position="fixed" top="0" left="0" right="0">
      <Heading fontSize={{ base: 68, md: 72 }}>
      <Link to="/">
      <img
            src={ImageLogo}
            height="auto"
            width="60rem"
          />
      </Link>
      </Heading>
      <Flex gap={{ base: 2, md: 10 }}>
        {/** Desktop */}
        <Flex gap={10} display={{ base: "none", md: "flex" }}>
          <Heading order={3}>
            <Link to="/portfolio">Portfolio</Link>
          </Heading>
          <Heading order={3}>
            <Link to="/past-experiences">Past Experiences</Link>
          </Heading>
        </Flex>
        {/** Mobile */}
        <IconButton
          icon={<RxHamburgerMenu />}
          aria-label="menu"
          fontSize={30}
          bg="none"
          color="white"
          _hover={{ bg: "none" }}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} size="full" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody bg="#202020">
              <DrawerCloseButton
                paddingTop={12}
                paddingRight={8}
                fontSize={20}
              />
              <Flex
                gap={10}
                flexDir="column"
                paddingTop={40}
                justifyItems="center"
                alignItems="center"
              >
                <Heading order={3}>
                  <Link to="/portfolio" onClick={onClose}>
                  Portfolio
                  </Link>
                </Heading>
                <Heading order={3}>
                  <Link to="/past-experiences" onClick={onClose}>
                  Past Experiences
                  </Link>
                </Heading>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default TransparentHeader;
