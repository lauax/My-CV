import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from 'react';

interface HeroImageProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  link?: string;
  date?: string;
  width?: string;
  height?: string;
  isBackground?: boolean;
  id?: string;
  justifyContent?: string;
  bgSize?: string; 
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  description,
  link,
  date,
  width,
  height,
  isBackground = true,
  justifyContent = "top",
  bgSize = "100%" 
}) => {
  
  return (
    <Flex
      width="100%"
      h={height || "100vh"}
      justifyContent={justifyContent}
      alignItems="center"
      paddingTop="2rem"
      bgImage={isBackground ? `url(${imageUrl})` : "none"}
      bgSize={bgSize}
      bgPos="center"
      color="white"
      flexDirection="column"
      backgroundRepeat="no-repeat"
    >
      <Box pl={{ base: "4", md: "10" }} textAlign="center">
        <Heading fontSize={{ base: "30", md: "52" }} mb={4}>
          {title}
        </Heading>
        <Text mb={6} fontSize={{ base: "18", md: "22" }}>
          {description}
        </Text>
        {date && (
          <Text mb={6} fontSize={{ base: "18", md: "22" }}>
            {date}
          </Text>
        )}
        {link && isBackground && (
          <Link href={link}>View more</Link>
        )}
      </Box>
      {!isBackground && (
        <Box justifyContent="center" display="flex" paddingBottom="4rem">
          <img
            src={imageUrl}
            alt={title}
            width={width}
            height={height}
            style={{ backgroundColor: "white" }}
          />
        </Box>
      )}
    </Flex>
  );
};

export default HeroImage;
