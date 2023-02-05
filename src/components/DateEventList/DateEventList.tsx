import { useDateEvents } from "../../Hooks/useDateEvents";
import { DateEvent } from "../DateEvent/DateEvent";

export const DateEventList = () => {

    const {DateEventList} = useDateEvents();

    return(

        <div>
            {DateEventList !== undefined && DateEventList.map(item => <DateEvent date_events={item} key={item.date}></DateEvent>)}
        </div>
    )
}