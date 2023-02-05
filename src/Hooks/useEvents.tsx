import { useState, useCallback, useEffect } from "react";
import { getApiEvents } from "../api/api";
import { EventApiType } from "../Type/EventApiType";

export const useEvents = () => {
  const [EventList, setEventList] = useState<EventApiType[]>();

  const fetchEventList = useCallback(async () => {
    const list = await getApiEvents();
    setEventList(list);
    return list;
  }, []);

  useEffect(() => {
    fetchEventList();
  }, [fetchEventList]);

  return { EventList, setEventList };
};
