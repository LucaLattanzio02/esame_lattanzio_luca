import { useQuery } from "react-query";
import { getApiTrack3 } from "../api/api";

export const useTracks3 = () => {
  
    const {isLoading, isError, data, error} = useQuery('trackList', getApiTrack3)
  
    return {isLoading, isError, data, error}
}