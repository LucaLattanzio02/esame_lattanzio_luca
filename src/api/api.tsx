import axios from "axios";
import { EventApiType } from "../Type/EventApiType";
import { SpeakerApiType } from "../Type/SpeakerApiType";
import { TracksDataType } from "../Type/TrackApiType";

export const getApiEvents =  async () => {
    const response = await axios.get("http://localhost:3006/events");
    const dati : EventApiType[] = response.data;
    return dati;     
}

export const getApiTrack =  async () => {
    const response = await axios.get(`http://localhost:3006/DateTracks?id=1`);
    const dati : TracksDataType[] = response.data;
    return dati;     
}

export const getApiTrack2 =  async () => {
    const response = await axios.get(`http://localhost:3006/DateTracks?id=2`);
    const dati : TracksDataType[] = response.data;
    return dati;     
}

export const getApiTrack3 =  async () => {
    const response = await axios.get(`http://localhost:3006/DateTracks?id=3`);
    const dati : TracksDataType[] = response.data;
    return dati;     
}

export const getApiSpeaker =  async () => {
    const response = await axios.get("http://localhost:3006/speakers");
    const dati : SpeakerApiType[] = response.data;
    return dati;     
}
