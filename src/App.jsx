import React, { useState, useEffect } from "react";
import Card from "./Card";
import Data from "./Data";

const App = () => {
  const [input, changeInput] = useState("");
  const [filterData, changeFilterData] = useState([]);
  const render = (obj, i) => {
    return (
      <Card
        key={obj.id}
        imgsrc={obj.imgsrc}
        name={obj.name}
        syno={obj.syno}
        link={obj.link}
      />
    );
  };
  const search = (obj) => {
    const val = obj.target.value;
    changeInput(val);
  };
  useEffect(() => {
    changeFilterData(
      Data.filter((obj) => {
        return obj.name.toLowerCase().includes(input.toLowerCase());
      })
    );
  }, [input, changeFilterData, Data]);

  return (
    <>
      {" "}
      <div className="title_tile">
        {" "}
        Netflix Clone
        <input
          type="text"
          placeholder="Search Your Show"
          onChange={search}
          value={input}
        />
      </div>
      <div className="obj">{filterData.map(render)};</div>
    </>
  );
};

export default App;
