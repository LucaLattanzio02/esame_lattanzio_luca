import { useQuery } from "react-query";
import { getApiSpeaker } from "../api/api";

export const useSpeakers = () => {

  const {isLoading, isError, data, error} = useQuery('speakerList', getApiSpeaker)

  return {isLoading, isError, data, error};

  /*
  const [speakerList, setSpeakerList] = useState<SpeakerApiType[]>();

  const fetchTrackList = useCallback(async () => {
    const list = await getApiSpeaker();
    setSpeakerList(list);
    return list;
  }, []);

  useEffect(() => {
    fetchTrackList();
  }, [fetchTrackList]);

  return { speakerList, setSpeakerList };
  */
  
};
