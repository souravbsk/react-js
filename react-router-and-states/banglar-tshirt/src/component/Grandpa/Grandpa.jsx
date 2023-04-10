import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("gold");
export const monyContext = createContext(0);
export const EidContext = createContext(0);
const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);
  const [eidi, setEidi] = useState(0);

  return (
    <EidContext.Provider value={{eidi,setEidi}}>
      <monyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden ring">
          <div className="grandpa">
            <h1>Hello GrandPa</h1>
            <section className="flex">
              <Father ring={ring}></Father>
              <Uncle></Uncle>
              <Aunty ring={ring}></Aunty>
            </section>
          </div>
        </RingContext.Provider>
      </monyContext.Provider>
    </EidContext.Provider>
  );
};

export default Grandpa;

/**
 * 1. first import createContent(default value) to  create context and export it
 * 2. Create a provider and wrap the component  and pass value
 * 3. to get data import useContext() and use it
 *
 */
