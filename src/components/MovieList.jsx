// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import getMovieByGenreId from "../Services/GlobalAPi2";
import MovieCard from "./MovieCard";

// eslint-disable-next-line react/prop-types
function MovieList({ genreId }) {
  const [movieList, setmovieList] = useState([]);
  useEffect(() => {
    getMoviesByGenreId();
  }, []);
  const getMoviesByGenreId = () => {
    getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
      setmovieList(resp.data.results);
    });
  };

  function MovieCard1(item, index) {
    if (index < 6) {
      return <MovieCard movie={item} />;
    }
  }
  return (
    <div className="flex overflow-x-auto  gap-3 scrollbar-hide scroll-smooth rounded-md">
      {movieList.map(MovieCard1)}
    </div>
  );
}

// function MovieList() {
//   return <div>hello</div>;
// }

export default MovieList;
