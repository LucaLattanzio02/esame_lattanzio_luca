import { Box, Text } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { SpeakerApiType } from "../../Type/SpeakerApiType";
import { Image } from '@chakra-ui/react'

type Speakerprops = {
  speaker: SpeakerApiType;
};

export const Speaker = ({ speaker }: Speakerprops) => {
  return(
    <Box mt='60px' alignItems='center'>
      
      <HStack justify='center' spacing={24}>
        <Image src={speaker.image} alt='img' />
        <Text color={"white"}> {speaker.name} </Text>
        <Text color={"white"}> {speaker.specializzazione} </Text>
        <Text color={"white"}> {speaker.description} </Text>
      </HStack>
      </Box>
  )
};
