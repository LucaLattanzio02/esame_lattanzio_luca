import { useTracks } from "../../Hooks/useTracks"
import { Track } from "../Track/Track";

export const TrackList = () => {

const {trackList} = useTracks();

    return(

        <div>
            {trackList !== undefined && trackList.map(item => <Track track={item} key={item.id}></Track>)}
        </div>
    )


}