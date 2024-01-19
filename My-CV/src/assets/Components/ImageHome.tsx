import { Flex } from "@chakra-ui/react";
import HeroImage from "./HeroImage";

function ImageHome() {

return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      data-testid="carousel-container"
      
    >
      <HeroImage 
        width="30"
        imageUrl="../Images/BildPåMig.jpg"
        height="80vh"
        
        />
      <HeroImage 
        width="70"
        imageUrl="../Images/background.jpg"
        height="80vh"
        />
     
    </Flex>
  );
}

export default ImageHome;