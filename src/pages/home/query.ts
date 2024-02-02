import axios from "axios";

export const fetchMovies = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTFlNDg3NGUyNGQ5ZTBiZmYwZGZmODNkZTA5NDE4MSIsInN1YiI6IjYxZjY4M2U2ZTlkYTY5MDBjNDI4YmUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvRDjbtLUKrpi5-6y70LDOfILCUI24O8fsZGPXvNiSg",
      },
    }
  );

  return res.data;
};

export const fetchTvShows = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTFlNDg3NGUyNGQ5ZTBiZmYwZGZmODNkZTA5NDE4MSIsInN1YiI6IjYxZjY4M2U2ZTlkYTY5MDBjNDI4YmUxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvRDjbtLUKrpi5-6y70LDOfILCUI24O8fsZGPXvNiSg",
      },
    }
  );

  return res.data;
};
