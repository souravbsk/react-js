import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const FeatureList = ({ feature }) => {
  return (
    <div className="flex items-center gap-2 space-y-2">
      <CheckCircleIcon className="h-6 w-6 text-white" />

      <span>{feature}</span>
    </div>
  );
};

export default FeatureList;
