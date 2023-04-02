import axios from "axios";
import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import SearchField from "../SearchField/SearchField";

const Foods = ({ handleProductId }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((response) => setFoods(response.data.meals));
  }, []);

  const searchItemData = (product) => {
    if (product) {
      setFoods(product);
    }
  };

  return (
    <div className="mt-8">
      <div className="sticky top-28 ">
        <h1 className=" text-2xl text-center font-semibold">Search your Foods</h1>
        <SearchField setSearchItem={searchItemData}></SearchField>
      </div>
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {foods.map((food) => (
          <Food
            key={food.idMeal}
            handleProductId={handleProductId}
            food={food}
          ></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
