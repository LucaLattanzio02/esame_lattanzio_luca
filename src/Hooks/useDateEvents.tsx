import { useState, useCallback, useEffect } from "react";
import { getApiDateEvents } from "../api/api";
import { DateEventApiType } from "../Type/DateEventApiType";

export const useDateEvents = () => {
  const [DateEventList, setDateEventList] = useState<DateEventApiType[]>();

  const fetchEventList = useCallback(async () => {
    const list = await getApiDateEvents();
    setDateEventList(list);
    return list;
  }, []);

  useEffect(() => {
    fetchEventList();
  }, [fetchEventList]);

  return { DateEventList, setDateEventList };
};
