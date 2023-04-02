import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchField = ({setSearchItem}) => {
  const [text, setText] = useState(null);
  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      .then((response) => {
        setSearchItem(response.data.meals);
      });
  }, [text]);


  const handleInputValue = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="text-center mt-8">
        <input
          onChange={handleInputValue}
          type="text"
          placeholder="Search…"
          className="input input-bordered"
        />
      </div>
    </div>
  );
};

export default SearchField;
