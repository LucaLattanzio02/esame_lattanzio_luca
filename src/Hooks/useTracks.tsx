import { useCallback, useEffect, useState } from "react"
import { getApiTrack } from "../api/api";
import { TrackApiType } from "../Type/TrackApiType";

export const useTracks = () => {

    const [trackList, setTrackList] = useState<TrackApiType>();

    const fetchTrackList = useCallback(async() => {
        const list = await getApiTrack();
        setTrackList(list);
        return list;
    }, [])

    useEffect(() => {
        fetchTrackList();
    }, [fetchTrackList])

    return {trackList, setTrackList}

}