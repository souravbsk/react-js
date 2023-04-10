import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { monyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
    const [money,setMoney] = useContext(monyContext);
   
  return (
    <div>
      <h2>Uncle</h2>
      <p>{money}</p>
      <button onClick={() => setMoney(money + 100)}>Add Money 100tk</button>
      <section className="flex">
        <Cousin>elon musk</Cousin>
        <Cousin>Mark Jaku vai</Cousin>
      </section>
    </div>
  );
};

export default Uncle;
