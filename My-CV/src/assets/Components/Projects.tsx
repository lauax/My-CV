import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import data from "../../../data/Portfolio.json";
import HeroImage from "./HeroImage";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: ProjectProps[] = data;
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!isScrolling) {
       
        setIsScrolling(true);

        
        const imageHeight = window.innerHeight;

        
        const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
        const scrollAmount = scrollDirection === 'down' ? imageHeight : -imageHeight;
        const nextScrollPosition = Math.round(window.scrollY / imageHeight) * imageHeight + scrollAmount;

        
        window.scrollTo({
          top: nextScrollPosition,
          behavior: 'smooth',
        });

        
        setTimeout(() => {
          setIsScrolling(false);
        }, 500); 
      }
    };

    
    window.addEventListener('wheel', handleScroll);

    
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [isScrolling]);

  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      data-testid="carousel-container"
      flexDirection="column"
    >
      {projects.map((project: ProjectProps, index: number) => (
        <HeroImage
          key={index}
          imageUrl={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
          height="100vh"
          bgSize="100%"
          
        />
      ))}
    </Flex>
  );
}

export default Projects;
