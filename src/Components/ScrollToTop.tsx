import { IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {showButton && (
        <IconButton
          aria-label="Scroll to Top"
          icon={<FaArrowAltCircleUp />}
          onClick={scrollToTop}
          position="fixed"
          bottom="20"
          right="2rem"
          colorScheme="blue"
          backgroundColor="white"
          color="black"
        />
      )}
    </>
  );
};

export default ScrollToTop;
