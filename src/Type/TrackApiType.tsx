export type TrackApiType = {
  id: number;
  id_event: number;
  time: string;
  title: string;
  description: string;
  image: string;
};

export type TracksDataType = {
  id: number;
  date: string;
  tracks: TrackApiType[];
}
