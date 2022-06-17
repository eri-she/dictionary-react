import React from "react";
import "./Dictionary.css";
import { useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function wordChange(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${word}`);
  }
  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={wordChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
