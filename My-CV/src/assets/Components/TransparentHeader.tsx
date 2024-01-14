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

function TransparentHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Flex px={35} py={3} justify="space-between" align="center" bg="transparent">
      <Heading fontSize={{ base: 68, md: 72 }}>
        <Link to="/">Lucas-CV</Link>
      </Heading>
      <Flex gap={{ base: 2, md: 10 }}>
        {/** Desktop */}
        <Flex gap={10} display={{ base: "none", md: "flex" }}>
          <Heading order={3}>
            <Link to="portfolio">Portfolio</Link>
          </Heading>
          <Heading order={3}>
            <Link to="pastExperiences">Past Experiences</Link>
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
                  <Link to="categories" onClick={onClose}>
                    Categories
                  </Link>
                </Heading>
                <Heading order={3}>
                  <Link to="favorites" onClick={onClose}>
                    Favorites
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
