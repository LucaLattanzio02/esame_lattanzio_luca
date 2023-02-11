import { useQuery } from "react-query";
import { getApiEvents } from "../api/api";

export const useEvents = () => {
  
  const {isLoading, isError, data, error} = useQuery('eventList', getApiEvents)

  return {isLoading, isError, data, error};
  /*
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
  */
};
