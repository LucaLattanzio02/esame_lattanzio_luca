import { EventApiType } from "../../Type/EventApiType";

type Eventprops = {
    events: EventApiType;
}

export const Event = ({events} : Eventprops) => {

    return(
        <div>

            <p> {events.title} </p> <br></br>
            <p> {events.description} </p>

        </div>
    );


}