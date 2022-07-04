import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div>
        {props.synonym.map(function (synonym, index) {
          return (
            <div key={index} className="Synonym">
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
