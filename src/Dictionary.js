import React from "react";
import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");

  function wordChange(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelKey = `563492ad6f9170000100000142eab8111d9d43709d432c5a49d5d5a1`;
    let pexelUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    axios
      .get(pexelUrl, { headers: { Authorization: `Bearer ${pexelKey}` } })
      .then(handleResponsePexel);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handleResponsePexel(response) {
    setPhotos(response.data.photos);
  }
  return (
    <div>
      <section className="Search">
        <form onSubmit={handleSubmit}>
          <input type="search" className="Form-control" onChange={wordChange} />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
