// eslint-disable-next-line no-unused-vars
import React from "react";

import marvel from "../assets/images/marvel.png";
import disney from "../assets/images/disney.png";
import nationalG from "../assets/images/nat.webp";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwars.png";

import starwarV from "./../assets/Videos/Disney.mp4";
import disneyV from "./../assets/Videos/Disney.mp4";
import marvelV from "./../assets/Videos/Disney.mp4";
import nationalGeographicV from "./../assets/Videos/Disney.mp4";
import pixarV from "./../assets/Videos/Disney.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];

  function videoPlay(item) {
    return (
      <div
        className="border-[2px] border-gray-600
  rounded-lg hover:scale-110 transition-all duration-300
  ease-in-out cursor-pointer relative shadow-xl 
  shadow-gray-800
  
  "
      >
        <video
          src={item.video}
          autoPlay
          loop
          playsInline
          muted
          className=" absolute w-full h-full object-cover  z-0  top-0 rounded-md opacity-0 hover:opacity-50"
        />
        <img
          src={item.image}
          className="w-full z-[1] opacity-100 h-[200px] rounded-md"
        />
      </div>
    );
  }
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map(videoPlay)}
    </div>
  );
}

export default ProductionHouse;
