import { useEvents } from "../../Hooks/useEvents";
import { Event } from "../Event/Event";

export const EventList = () => {

    const {data} = useEvents();

    return(

        <div>
            {data !== undefined && data.map(item => <Event events={item} key={item.id}></Event>)}
        </div>
    )
}