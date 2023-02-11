import { useQuery } from "react-query";
import { getApiTrack2 } from "../api/api";

export const useTracks2 = () => {
  
    const {isLoading, isError, data, error} = useQuery('trackList', getApiTrack2)
  
    return {isLoading, isError, data, error}
}