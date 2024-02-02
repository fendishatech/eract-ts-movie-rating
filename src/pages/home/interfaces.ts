export enum DisplayType {
  Movies = "movies",
  TvShows = "tvShows",
}

export interface DisplayData {
  id: number;
  overView: string;
  title?: string;
  name?: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}
