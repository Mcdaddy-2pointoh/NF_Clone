import React from "react";
import "./index";

function Card(props) {
  return (
    <div className="Card">
      <div className="imag">
        <img src={props.imgsrc} alt="Show poster" />
      </div>
      <div className="head">{props.name}</div>
      <div className="syn">{props.syno}</div>
      <a href={props.link} target="_blank" rel="noreferrer">
        <button>Watch now</button>
      </a>
    </div>
  );
}

export default Card;
