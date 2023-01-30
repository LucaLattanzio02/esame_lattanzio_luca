import "./App.css";
import { SpeakerList } from "./components/SpeakerList/SpeakerList";
import { TrackList } from "./components/TrackList/TrackList";
import { Text} from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Text textAlign="center" color="white" fontSize="30px"> JSWORLD CONFERENCE 2023 </Text>
      <TrackList />
    
      <Text textAlign="center" color="white" fontSize="30px"> SPEAKER </Text>

      <SpeakerList/>
    </div>
  );
}

export default App;
