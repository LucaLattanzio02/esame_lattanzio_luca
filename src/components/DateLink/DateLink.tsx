import { HStack, VStack, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../DateLink/css/DateLink.css"

export const DateLink = () => {
  return (
    <HStack spacing="24px" ml="600px" mr="600px" mt="50px">
      <Box textAlign="center">
        <Link to="/" className="link">
          {" "}
          Day 1{" "}
        </Link>
        <VStack>
          <Text color="white"> February 8th 2023 </Text>
        </VStack>
      </Box>
      <Box textAlign="center">
        <Link to="/Day2" className="link">
          {" "}
          Day 2{" "}
        </Link>
        <VStack>
          <Text color="white"> February 9th 2023 </Text>
        </VStack>
      </Box>
      <Box textAlign="center">
        <Link to="/Day3" className="link">
          {" "}
          Day 3{" "}
        </Link>
        <VStack>
          <Text color="white"> February 10th 2023 </Text>
        </VStack>
      </Box>
    </HStack>
  );
};
