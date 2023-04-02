import React from "react";
import { FaPlay } from "react-icons/fa";

const Food = ({ food,handleProductId }) => {
  console.log(food);
  const { strMealThumb, strArea, strYoutube, strInstructions, strMeal } = food;
  return (
    <div className="card card-compact w-96 max-w-full bg-base-100 sticky top-64 shadow-xl">
      <figure className="h-56">
        <img src={strMealThumb} className="h-56 w-full object-fill" alt="Shoes" />
      </figure>
      <div className="text-right -mt-6 mr-4">
        <a href={strYoutube}>
          <button className="bg-slate-500 px-3 py-3 rounded-full ">
            <FaPlay className="text-2xl text-red-500"></FaPlay>
          </button>
        </a>
      </div>
      <div className="card-body">
        <h2 className="card-title">{strMeal}</h2>
        <p>
          {strInstructions.length > 150
            ? strInstructions.slice(0, 100) + "..."
            : strInstructions}
        </p>
        <p>Area: {strArea}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleProductId(strMeal)} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
