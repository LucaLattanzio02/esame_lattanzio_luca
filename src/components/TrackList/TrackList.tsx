import { useTracks } from "../../Hooks/useTracks"
import { Event } from "../Event/Event";

export const TrackList = () => {

const {trackList} = useTracks();

    return(

        <div>
            {trackList && trackList.map(item => <Event event={item} key={item.id}></Event>)}
        </div>
    )


}