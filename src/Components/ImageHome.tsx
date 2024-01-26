import { Flex } from "@chakra-ui/react";
import HeroImage from "./HeroImage";

function ImageHome() {

return (
    <Flex
      w="100%"
    >
      <HeroImage 
        imageUrl="/Images/background.jpg"
        height="71vh"
        title="Lucas-CV"
        justifyContent="center"
        bgSize="none"
        />
     
    </Flex>
  );
}

export default ImageHome;