import { Container } from "@chakra-ui/react";
import { EventApiType } from "../../Type/EventApiType";
import { Text } from "@chakra-ui/react";

type Eventprops = {
    events: EventApiType;
}

export const Event = ({events} : Eventprops) => {

    return(
        <Container textAlign="center" maxW="1600px">

            <Text fontSize="30px" color="red"> {events.title} </Text>
            <Text fontSize="15px" color="white" mr="50px" ml="50px"> {events.description} </Text>

        </Container>
    );
}