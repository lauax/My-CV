import { Flex } from "@chakra-ui/react";
import HeroImage from "./HeroImage";

function ImageHome() {

return (
    <Flex
      w="100%"
    >
      <HeroImage 
        imageUrl="../Images/background.jpg"
        height="80vh"
        title="Lucas-CV"
        justifyContent="center"
        bgSize="100%"
        
        />
     
    </Flex>
  );
}

export default ImageHome;