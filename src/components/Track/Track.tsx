import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { TrackApiType } from "../../Type/TrackApiType";

type Trackprops = {
  track: TrackApiType;
};

export const Track = ({ track }: Trackprops) => {
  return (
    <Box>
      <VStack spacing="5px" alignItems="center" mt="50px">
        <Box color="white" fontSize="20px">
           {track.data}
        </Box>
        <HStack mt="20px">
          <Text color="white" mr="50px">
            {track.time}
          </Text>
          <Image
            src={track.image}
            h="200px"
            w="200px"
            borderRadius="10%"
            objectFit="cover"
          />
          <VStack spacing="10px" alignItems="center">
            <Text color="white" as="b">
              {track.title}
            </Text>
            <Text color="white" as="i">
              {track.description}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};
