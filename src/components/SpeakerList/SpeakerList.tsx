import { VStack, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { useSpeakers } from "../../Hooks/useSpeakers";
import { Speaker } from "../Speaker/Speaker";

export const SpeakerList = () => {

    const { isLoading, isError, data, error } = useSpeakers();

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
                {data !== undefined && data.map((item)=> <Speaker speakers={item} key={item.id}></Speaker>)}
            </div>
        </VStack>
    )
    
}