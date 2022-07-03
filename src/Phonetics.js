import React from "react";
import "./Phonetics.css";
export default function Phonetics(props) {
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        🔈
      </a>
      {props.phonetic.text}
    </div>
  );
}
