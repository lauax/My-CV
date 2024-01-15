import { Flex } from "@chakra-ui/react";
import React from 'react';
import data from "../../../data/Pastexperience.json";
import HeroLayout from "../Components/HeroImage";

interface PastexperienceProps {
  title: string;
  description: string;
  date: string;
  image: string;
  isBackground?:boolean;
}

const Pastexperience: React.FC = () => {
  const pastExperiences: PastexperienceProps[] = data;
  
  return (
    <Flex
      w="100" 
      justifyContent="center"
      alignItems="center"
      data-testid="carousel-container"
      flexDirection="column"
    >
      {pastExperiences.map((experience: PastexperienceProps, index: number) => (
        <HeroLayout
          key={index}
          imageUrl={experience.image}
          title={experience.title}
          description={experience.description}
          date={experience.date}
          width="100"
          height="auto"
          isBackground={false}
        />
      ))}
    </Flex>
  ); 
}

export default Pastexperience;
