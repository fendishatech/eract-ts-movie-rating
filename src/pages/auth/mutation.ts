import axios from "axios";

export const mutationLogin = async () => {
  const res = await axios.get(
    "http://api.themoviedb.org/3/authentication/guest_session/new",
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
