import { useQuery } from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";
import { getApiSpeaker } from "../api/api";
import { SpeakerApiType } from "../Type/SpeakerApiType";

export const useSpeakers = () => {

  const {data} = useQuery("speakerList", getApiSpeaker)

  return {data}

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
