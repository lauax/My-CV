import { Flex } from "@chakra-ui/react";
import React from 'react';
import HeroLayout from "../Components/HeroImage"; // Import the appropriate component

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface HeroImageProps {
  projects: ProjectProps[];
}

const HeroImage: React.FC<HeroImageProps> = ({ projects }) => {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      data-testid="carousel-container"
    >
      {projects.map((project: ProjectProps, index: number) => (
        <HeroLayout
          key={index}
          imageUrl={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </Flex>
  ); 
}

export default HeroImage;
