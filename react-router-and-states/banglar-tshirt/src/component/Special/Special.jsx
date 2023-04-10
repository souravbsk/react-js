import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = ({ring}) => {
    const angti = useContext(RingContext);
  return (
    <div>
      <p>Special: {angti}</p>
    </div>
  );
};

export default Special;
