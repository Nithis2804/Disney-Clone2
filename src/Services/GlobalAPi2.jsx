import axios from "axios";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=6ce3a5e73b728202a6c64280f553d29d";

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default getMovieByGenreId;
