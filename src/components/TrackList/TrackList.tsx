import {
  VStack,
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useTracks } from "../../Hooks/useTracks";
import { Track } from "../Track/Track";

export const TrackList = () => {
  const { isLoading, isError, data, error } = useTracks();

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
        data.map((item) => <Track track={item} key={item.id}></Track>)}
    </VStack>
  );
};
