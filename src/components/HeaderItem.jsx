// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white flex flex-wrap gap-3  items-center text-[18px] font-semibold cursor-pointer mb-2">
      <Icon />
      {
        <h2 className="hover:underline underline-offset-8 hidden md:block">
          {name}
        </h2>
      }
    </div>
  );
}

export default HeaderItem;
