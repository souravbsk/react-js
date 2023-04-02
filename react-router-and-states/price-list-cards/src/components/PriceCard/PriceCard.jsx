import React from "react";
import FeatureList from "../FeatureList/FeatureList";

const PriceCard = ({ price }) => {
  return (
    <div className="bg-purple-400 flex flex-col rounded-lg p-4">
      <h5 className="text-center">
        <span className="text-5xl font-extrabold text-purple-700">
          {price.price}
        </span>
        <span className="text-xl font-medium text-white">/mon</span>
      </h5>

      <h2 className="text-3xl text-center font-bold ">
        {price.membershipType}
      </h2>
      <div className="pb-3">
        <h2 className="text-white mb-3 font-semibold text-2xl underline">Feature</h2>
        {price.features.map((feature, i) => (
          <FeatureList key={i} feature={feature}></FeatureList>
        ))}
      </div>
      <button className="bg-purple-800 mt-auto text-white font-semibold w-full py-2 rounded-md text-2x">Buy Now</button>

    </div>
  );
};

export default PriceCard;
