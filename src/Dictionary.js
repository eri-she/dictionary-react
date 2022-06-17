import React from "react";
import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function wordChange(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response);
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
