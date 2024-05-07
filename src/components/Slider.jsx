// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import getTrendingVideos from "../Services/GlobalAPi";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    getTrendingVideos.then((resp) => {
      // console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += screenWidth;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth;
  };

  function createImage(item) {
    return (
      <img
        src={IMAGE_BASE_URL + item.backdrop_path}
        className="min w-[500px] md:h-[310px] object-cover object-left-top mr-5 px-1 py-2 rounded-md 
        hover:border-[3px] border-gray-400 transition-all duration-100 ease-in-out"
      />
    );
  }

  return (
    <div>
      <HiChevronDoubleLeft
        className="hidden md:block text-white text-[30px] mx-2 absolute my-[150px]"
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      />
      <HiChevronDoubleRight
        className="hidden md:block text-white text-[30px] mx-2 my-[150px] absolute cursor-pointer right-0"
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      />
      <div
        className="flex overflow-x-auto w-full scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map(createImage)}
      </div>
    </div>
  );
}

export default Slider;
