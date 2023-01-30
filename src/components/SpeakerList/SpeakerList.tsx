import { useSpeakers } from "../../Hooks/useSpeakers";
import { Speaker } from "../Speaker/Speaker";

export const SpeakerList = () => {

    const {speakerList} = useSpeakers();

    return(

        <div>
            {speakerList !== undefined && speakerList.map(item => <Speaker speaker={item} key={item.id}></Speaker>)}
        </div>
    )

}