import { useEvents } from "../../Hooks/useEvents";
import { Event } from "../Event/Event";

export const EventList = () => {

    const {EventList} = useEvents();

    return(

        <div>
            {EventList !== undefined && EventList.map(item => <Event events={item} key={item.id}></Event>)}
        </div>
    )
}