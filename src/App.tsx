import "./App.css";
import { SpeakerList } from "./components/SpeakerList/SpeakerList";
import { TrackList } from "./components/TrackList/TrackList";
import { Box, Text } from "@chakra-ui/react";
import { EventList } from "./components/EventList/EventList";

function App() {
  return (
    <Box>
      <EventList />

      <Text textAlign="center" color="white" fontSize="25px" mt="50px">
        JSWORLD CONFERENCE 2023
      </Text>

      <hr className="hr"></hr>

      <TrackList />

      <Text textAlign="center" color="White" fontSize="25px" mt="100px">
        SPEAKERS
      </Text>

      <SpeakerList />
    </Box>
  );
}

export default App;
