import React, { useEffect, useState } from "react";

const SelectOption = () => {
  const [selectValue, setSelectValue] = useState(null);
  const [cityValue, setCityValue] = useState([]);
  const allCountry = [
    {
      id: 1,
      county: "USA",
      city: ["New York", "Los Angeles", "Chicago", "Houston"],
      capital: "Washington D.C.",
    },
    {
      id: 2,
      county: "Canada",
      city: ["Toronto", "Vancouver", "Montreal", "Calgary"],
      capital: "Ottawa",
    },
    {
      id: 3,
      county: "United Kingdom",
      city: ["London", "Manchester", "Liverpool", "Birmingham"],
      capital: "London",
    },
    {
      id: 4,
      county: "France",
      city: ["Paris", "Marseille", "Lyon", "Toulouse"],
      capital: "Paris",
    },
    {
      id: 5,
      county: "Germany",
      city: ["Berlin", "Hamburg", "Munich", "Frankfurt"],
      capital: "Berlin",
    },
  ];
  useEffect(() => {
    if(selectValue){
        const citys = allCountry.find((cn) => cn?.county === selectValue);
        setCityValue(citys?.city);
    }
  }, [selectValue]);
  return (
    <div>
      <h1>dynamic Select</h1>
      <select onChange={(e) => setSelectValue(e.target.value)}>
        {allCountry.map((country) => (
          <option value={country.county} key={country.id}>
            {country.county}
          </option>
        ))}
      </select>
      <select>{ cityValue.map((cn,i) => <option key={i}>{cn}</option>)}</select>
    </div>
  );
};

export default SelectOption;
