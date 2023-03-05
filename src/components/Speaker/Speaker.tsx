import { Text, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SpeakerApiType } from "../../Type/SpeakerApiType";

type Speakerprops = {
  speakers: SpeakerApiType;
};

export const Speaker = ({ speakers }: Speakerprops) => {
  return (
    <Card float="left" mt="50px">
      <CardBody w="300px" ml="37px" mr="39px">
        <Image
          src={speakers.image}
          alt="img"
          borderRadius="10px"
          w="300"
          h="300"
          objectFit="cover"
        />
        <Stack mt="4" spacing="3">
          <Heading color="white">
            {speakers.name}
          </Heading>
          <Text color="red">
            {speakers.specializzazione}
          </Text>
          <Text color="white" fontSize="15px">
            {speakers.description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
