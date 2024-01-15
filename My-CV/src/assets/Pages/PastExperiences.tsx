import { Flex } from "@chakra-ui/react";
import Pastexperience from "../Components/PastExperienceMap";
import TransparentHeader from "../Components/TransparentHeader";

function PastExperiences() {
  return (
    <>
    <TransparentHeader/>
    <Flex px={35} flexDirection="column" marginTop="3rem" gap={10}>
    <Pastexperience/>
    </Flex>
    </>
  );
}

export default PastExperiences;
