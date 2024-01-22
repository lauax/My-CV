import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
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
          height="100vh"
          isBackground={false}
          justifyContent="center"
        />
      ))}
    </Flex>
  ); 
}

export default Pastexperience;
