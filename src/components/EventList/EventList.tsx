import { VStack, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useEvents } from "../../Hooks/useEvents";
import { Event } from "../Event/Event";

export const EventList = () => {

    const {isLoading, isError, data, error } = useEvents();

    return(

        <VStack>
            {isLoading && (
                <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                />
            )}

            {isError && (
                <Alert status="error">
                <AlertIcon />
                <AlertTitle>Si è verificato un errore!</AlertTitle>
                <AlertDescription>
                    Contattare lo stagista:
                    {error instanceof Error ? error.message : "Errore generico"}
                </AlertDescription>
                </Alert>
            )}

            <div>
                {data !== undefined && data.map(item => <Event events={item} key={item.id}></Event>)}
            </div>
        </VStack>
    )
}