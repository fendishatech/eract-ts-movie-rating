import axios from "axios";

const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const POPULAR_TV_SHOWS_URL =
  "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1";
const TMDB_ACCESS_TOKEN = import.meta.env.VITE_APP_TMDB_ACCESS_TOKEN;

export const fetchMovies = async () => {
  const res = await axios.get(POPULAR_MOVIES_URL, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    },
  });

  return res.data;
};

export const fetchTvShows = async () => {
  const res = await axios.get(POPULAR_TV_SHOWS_URL, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
    },
  });

  return res.data;
};
