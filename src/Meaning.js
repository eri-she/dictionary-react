import React from "react";
import "./Meaning.css";
import Synonym from "./Synonym";

export default function Meaning(props) {
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <div>
              <strong>Definition: </strong>
              {definitions.definition}
            </div>
            <div className="Example">{definitions.example}</div>
            <div>
              <Synonym synonym={definitions.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
