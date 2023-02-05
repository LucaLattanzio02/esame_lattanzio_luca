import "./App.css";
import { SpeakerList } from "./components/SpeakerList/SpeakerList";
import { TrackList } from "./components/TrackList/TrackList";
import { Box, HStack, Text } from "@chakra-ui/react";
import { EventList } from "./components/EventList/EventList";
import { DateEventList } from "./components/DateEventList/DateEventList";

function App() {
  return (
    <Box>
      <EventList />

      <Text textAlign="center" color="white" fontSize="25px" mt="50px">
        JSWORLD CONFERENCE 2023
      </Text>

      <HStack>
        <DateEventList />
        <Box float="left" textAlign="center">
          <HStack spacing="24px">
            <Box ml="280px">
              <Text color="white" fontSize="20px">
                DAY 2
              </Text>
              <Text color="white" fontSize="14px">
                February 9th 2023
              </Text>
            </Box>

            <Box float="left" textAlign="center">
              <HStack spacing="24px">
                <Box ml="280px">
                  <Text color="white" fontSize="20px">
                    DAY 3
                  </Text>
                  <Text color="white" fontSize="14px">
                    February 10th 2023
                  </Text>
                </Box>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </HStack>

      <div className="divclear"></div>

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
