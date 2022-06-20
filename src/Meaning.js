import React from "react";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>{definitions.definition}</p>
            <p className="Example">{definitions.example}</p>
          </div>
        );
      })}
    </div>
  );
}
