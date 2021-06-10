import React, { useState } from "react";
import Card from "./Card";
import Data from "./Data";

const App = () => {
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
  return (
    <>
      {" "}
      <div className="title_tile">
        {" "}
        Netflix Clone
        <input type="text" placeholder="Search Your Show" />
      </div>
      <div className="obj">{Data.map(render)};</div>
    </>
  );
};

export default App;
