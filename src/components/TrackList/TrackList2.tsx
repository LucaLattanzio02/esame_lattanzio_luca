import {
    VStack,
    Spinner,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from "@chakra-ui/react";
import { useTracks2 } from "../../Hooks/useTracks2";
  import { DateTrack } from "../DateTrack/DateTrack";
  
  export const TrackList2 = () => {
    const { isLoading, isError, data, error } = useTracks2();
  
    return (
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
  
        {data !== undefined &&
         data !== null && data.map(item  => <DateTrack datetracks={item} key={item.id}></DateTrack>)}
      </VStack>
    );
  };