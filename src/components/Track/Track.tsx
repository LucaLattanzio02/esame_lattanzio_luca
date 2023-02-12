import { Text, Image, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { TrackApiType } from "../../Type/TrackApiType";
import { BiTimeFive } from "react-icons/bi";

type Trackprops = {
  track: TrackApiType;
};

export const Track = ({ track }: Trackprops) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mt="60px"
    >
      <Text color="white" mt="90px" ml="140px">
        <BiTimeFive /> {track.time} <br></br>
      </Text>

      <Image
        objectFit="cover"
        w="200px"
        h="200px"
        src={track.image}
        alt="img"
        ml="10px"
        borderRadius="10px"
        mt="30px"
      />
      <Stack>
        <CardBody>
          <Heading size="md" color="white" ml="30px">
            {track.title}
          </Heading>

          <Container maxW="700px">
            <Text py="2" color="white" ml="30px">
              {track.description}
            </Text>
          </Container>
        </CardBody>
      </Stack>
    </Card>
  );
};
