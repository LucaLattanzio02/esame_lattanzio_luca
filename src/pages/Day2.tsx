import { Box, Text } from "@chakra-ui/react";
import { DateLink } from "../components/DateLink/DateLink";
import { EventList } from "../components/EventList/EventList";
import { SpeakerList } from "../components/SpeakerList/SpeakerList";
import { TrackList2 } from "../components/TrackList/TrackList2";


function Day2() {
  return (
    <Box>

      <EventList />

      <Text textAlign="center" color="white" fontSize="25px" mt="50px">
        JSWORLD CONFERENCE 2023
      </Text>

      <DateLink/>

      <hr className="hr"></hr>

      <TrackList2/>

      <Text textAlign="center" color="White" fontSize="25px" mt="100px">
        SPEAKERS
      </Text>

      <SpeakerList/>

      
    </Box>
  );
}

export default Day2;
