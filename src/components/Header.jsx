// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.jpg";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import HeaderItem from "./HeaderItem";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "Home",
      icon: HiHome,
    },
    {
      name: "Search",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WatchList",
      icon: HiPlus,
    },
    {
      name: "Originals",
      icon: HiStar,
    },
    {
      name: "Movies",
      icon: HiPlayCircle,
    },
    {
      name: "Series",
      icon: HiTv,
    },
  ];
  function createHeader(item) {
    return <HeaderItem name={item.name} Icon={item.icon} />;
  }
  function createHeader3(item, index) {
    if (index < 3) {
      return <HeaderItem name={""} Icon={item.icon} />;
    }
  }
  function createHeader2(item, index) {
    if (index > 2) {
      return <HeaderItem name={item.name} Icon={item.icon} />;
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-8 ">
        <img className="w-[80px] md:w-[115px] object-cover" src={Logo} />
        <div className="flex items-center">
          <div className="hidden md:flex gap-8 ">{menu.map(createHeader)}</div>
          <div className="flex gap-8 md:hidden ">{menu.map(createHeader3)}</div>
          <div
            className="flex gap-8 md:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-5 bg-black border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(createHeader2)}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div>{<img src={avatar} className="w-[80px] rounded-full" />}</div>
    </div>
  );
}

export default Header;
