import { TracksDataType } from "../../Type/TrackApiType"
import {Box, Text} from "@chakra-ui/react"
import { Track } from "../Track/Track"

type DateTracksprops = {
    datetracks: TracksDataType;
}

export const DateTrack = ({datetracks} : DateTracksprops) => {
    return (

        <Box>

            <Text color="red" textAlign="center" mt="50px">{datetracks.date}</Text>

            {datetracks.tracks.map(item => <Track track={item} key={item.id}></Track>)}

        </Box>

    )
}