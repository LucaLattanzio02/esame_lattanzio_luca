import { Card, CardBody, VStack } from "@chakra-ui/react";
import { EventApiType } from "../../Type/EventApiType"

type Eventprops = {
    event: EventApiType;
}

export const Event = ({event}:Eventprops) => {

    return(
        <Card>
            <CardBody>
                <VStack>
                    <p>{event.title}</p>
                    <p>{event.description}</p>
                </VStack>
            </CardBody>
        </Card>
    )
}