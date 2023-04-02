import React from "react";
import { BeakerIcon,ShoppingCartIcon } from "@heroicons/react/24/solid";

const Player = ({ player,handleAddToCart }) => {
  const { id, name, age, position, club, nationality, price, trophy, picture } =
    player;
  return (
    <div className="flex items-center sticky top-20 gap-2 bg-slate-100 shadow-md rounded-md">
      <figure className="">
        <img
          className="w-64 rounded-l-md h-64 object-cover"
          src={picture}
          alt=""
        />
      </figure>
      <div className="flex-1 px-3">
        <h5 className="text-2xl font-bold">{name}</h5>
        <div className="space-y-1 ">
          <p className="text-base">Age: {age}</p>
          <p className="text-base">Club: {club}</p>
          <p className="text-base">Position: {position}</p>
          <p className="text-base">Nationality: {nationality}</p>
          <p className="text-base">Trophy: {trophy}</p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <h2 className="text-slate-800 font-semibold text-lg">
            Price: ${price}
          </h2>
          <button onClick={() =>handleAddToCart({id,name,price,position,picture}) } className="flex items-center gap-2 bg-yellow-300 text-md text-slate-800 text-sm font-semibold px-3 py-2 rounded-lg">
           <ShoppingCartIcon className="w-6 h-6"></ShoppingCartIcon> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
