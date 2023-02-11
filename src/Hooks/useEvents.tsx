import { useQuery } from "react-query";
import { getApiEvents } from "../api/api";

export const useEvents = () => {
  
  const {data} = useQuery('eventList', getApiEvents)

  return {data};
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
