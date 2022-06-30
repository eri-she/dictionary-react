import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div>
        {props.synonym.map(function (synonym, index) {
          return (
            <div key={index}>
              <p>
                <strong>Synonym:</strong>
                {synonym}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
