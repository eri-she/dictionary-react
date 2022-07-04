import React from "react";
import "./Phonetics.css";
export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a
        className="Icon"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        🔈
      </a>
      {props.phonetic.text}
    </div>
  );
}
