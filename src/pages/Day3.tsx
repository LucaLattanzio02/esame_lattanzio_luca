import { Box, Text } from "@chakra-ui/react";
import { DateLink } from "../components/DateLink/DateLink";
import { EventList } from "../components/EventList/EventList";
import { SpeakerList } from "../components/SpeakerList/SpeakerList";
import { TrackList3 } from "../components/TrackList/TrackList3";


function Day3() {
  return (
    <Box>

    <EventList />

    <Text textAlign="center" color="white" fontSize="25px" mt="50px">
      JSWORLD CONFERENCE 2023
    </Text>

      <DateLink/>

      <hr className="hr"></hr>
      
      <TrackList3/>

      <Text textAlign="center" color="White" fontSize="25px" mt="100px">
        SPEAKERS
      </Text>

      <SpeakerList/>

    </Box>
  );
}

export default Day3;
