import React from "react";
import "./Dictionary.css";
import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");
  let [loaded, setLoaded] = useState(false);

  function wordChange(event) {
    setWord(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelKey = `563492ad6f9170000100000142eab8111d9d43709d432c5a49d5d5a1`;
    let pexelUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=4`;
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
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div>
        <section className="Search">
          <div className="Question"> What word do you want to look up?</div>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control"
              onChange={wordChange}
              defaultValue={props.defaultWord}
            />
          </form>
        </section>
        <Photos photos={photos} />
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
