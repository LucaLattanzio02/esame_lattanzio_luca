import { HStack, Text, Box } from "@chakra-ui/react";
import { DateEventApiType } from "../../Type/DateEventApiType";

export type DateEventprops = {
  date_events: DateEventApiType;
};

export const DateEvent = ({ date_events }: DateEventprops) => {
  return (
    <Box float="left" ml="300px" textAlign="center">
      <HStack spacing="24px">
        <Box>
        <Text color="red" fontSize="20px">
            {date_events.day}
          </Text>
          <Text color="#7FFFD4" fontSize="14px">
            {date_events.date}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
