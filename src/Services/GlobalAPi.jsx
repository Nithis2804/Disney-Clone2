import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const api_key = "6ce3a5e73b728202a6c64280f553d29d";

// const movieByGenreBaseURL =
//   "https://api.themoviedb.org/3/discover/movie?api_key=6ce3a5e73b728202a6c64280f553d29d";

const getTrendingVideos = axios.get(
  movieBaseURL + "/trending/all/day?api_key=" + api_key
);
// export const getMovieByGenreId = (id) =>
//   axios.get(movieByGenreBaseURL + "&with_genres=" + id);

// export default {
//   getTrendingVideos,
//   getMovieByGenreId,
// };

export default getTrendingVideos;
