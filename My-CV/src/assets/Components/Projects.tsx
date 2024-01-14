import { Flex } from "@chakra-ui/react";
import React from 'react';
import data from "../../../data/Portfolio.json";
import HeroLayout from "../Components/HeroImage";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
}



const Projects: React.FC = () => {
  const projects: ProjectProps[] = data;
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      data-testid="carousel-container"
      flexDirection="column"
     
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

export default Projects;
