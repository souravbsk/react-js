import React from "react";
import FetchData from "../../Utilites/FetchData";
import Player from "../Player/Player";

const Players = ({ handleAddToCart }) => {
  const [players, setPlayers] = FetchData();
  return (
    <div>
      <div className="sticky top-0">
        <h2 className="text-center font-semibold text-5xl py-5">
          Brazil Top 11
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {players.map((player) => (
          <Player
            key={player.id}
            handleAddToCart={handleAddToCart}
            player={player}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
