import { useQuery } from "react-query";
import { getApiTrack } from "../api/api";

export const useTracks = () => {
  
  const {isLoading, isError, data, error} = useQuery('trackList', getApiTrack)

  return {isLoading, isError, data, error};
  
  /*
  const [trackList, setTrackList] = useState<TrackApiType[]>();

  const fetchTrackList = useCallback(async () => {
    const list = await getApiTrack();
    setTrackList(list);
    return list;
  }, []);

  useEffect(() => {
    fetchTrackList();
  }, [fetchTrackList]);

  return { trackList, setTrackList };
  */
};
