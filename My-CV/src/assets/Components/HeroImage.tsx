import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from 'react';

interface HeroImageProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  description,
  link
}) => {
  return (
    <Flex
      w="100"
      h="70vh"
      justifyContent="center"
      alignItems="center"
      bgImage={`url(${imageUrl})`}
      bgSize="cover"
      bgPos="center"
      color="white"
    >
      <Box pl={{ base: "4", md: "10" }} textAlign="center">
        <Heading fontSize={{ base: "30", md: "52" }} mb={4}>
          {title}
        </Heading>
        <Text mb={6} fontSize={{ base: "18", md: "22" }}>
          {description}
        </Text>
        <Link href={link}>
          View more
        </Link>
      </Box>
    </Flex>
  );
}

export default HeroImage;
