import { useSpeakers } from "../../Hooks/useSpeakers";
import { Speaker } from "../Speaker/Speaker";

export const SpeakerList = () => {

    const {data} = useSpeakers();

    return(

        <div>
            {data !== undefined && data.map(item => <Speaker speakers={item} key={item.id}></Speaker>)}
        </div>
    )
    
}