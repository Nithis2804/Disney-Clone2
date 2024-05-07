// eslint-disable-next-line no-unused-vars
import React from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";

function GenreMovieList() {
  function createcard(item, index) {
    return (
      <div className="p-4 px-8 font-bold md:px-16">
        <h2 className="text-white text-[20px] py-2 ">{item.name}</h2>
        <div className="flex  w-full ">
          <MovieList genreId={item.id} />
        </div>
      </div>
    );
  }
  return <div>{GenresList.map(createcard)}</div>;
}

export default GenreMovieList;
