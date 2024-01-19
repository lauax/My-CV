import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
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
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!isScrolling) {
        // Set the flag to prevent further scrolling until animation is complete
        setIsScrolling(true);

        // Get the image height
        const imageHeight = window.innerHeight;

        // Calculate the next scroll position
        const scrollDirection = event.deltaY > 0 ? 'down' : 'up';
        const scrollAmount = scrollDirection === 'down' ? imageHeight : -imageHeight;
        const nextScrollPosition = Math.round(window.scrollY / imageHeight) * imageHeight + scrollAmount;

        // Jump to the next section (image height) on each scroll
        window.scrollTo({
          top: nextScrollPosition,
          behavior: 'smooth',
        });

        // Wait for the scroll animation to complete and then reset the flag
        setTimeout(() => {
          setIsScrolling(false);
        }, 500); // Adjust the timeout as needed
      }
    };

    // Attach the scroll event listener
    window.addEventListener('wheel', handleScroll);

    // Clean up the event listener on component unmount
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
