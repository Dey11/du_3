import React from "react";

const ListItem = (item) => {
  return (
    <div className="container max-w-[1400px] mx-auto bg-[#ffa1ab] grid grid-cols-3 my-2">
      <div className="col-span-1 ">
        <img
          src={item.item.image}
          alt="placeholder"
          className=" max-w-full max-h-fit"
        />
      </div>
      <div className="col-span-2 ">
        <h1 className="text-4xl">{item.item.state}</h1>
        <h3 className="text-md">Latitude: {item.item.lat}</h3>
        <h3 className="text-md">Longitude: {item.item.long}</h3>
        <h4 className="text-sm">Time: {item.item.time}</h4>
      </div>
    </div>
  );
};

export default ListItem;
