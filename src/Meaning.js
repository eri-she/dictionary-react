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
            <p>
              <strong>Definition: </strong>
              {definitions.definition}
            </p>
            <p className="Example">{definitions.example}</p>
            <p>
              <Synonym synonym={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
