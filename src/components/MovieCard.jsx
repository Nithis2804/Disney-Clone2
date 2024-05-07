// eslint-disable-next-line no-unused-vars
import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <div className="flex rounded-lg w-[110px] h-auto  hover:border-[3px] border-gray-300 md:w-[300px] ">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] h-auto rounded-lg md:w-[300px] "
      />
    </div>
  );
}

export default MovieCard;
