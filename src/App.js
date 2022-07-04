import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Title">Dictionary</div>
      <div className="Subtitle">
        <span>|</span> Choose your words wisely.
      </div>
      <Dictionary defaultWord="travel" />
      <small className="Footer">
        📖 This project was coded by Ericka Angeles and is{" "}
        <a
          href="https://github.com/eri-she/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced.
        </a>
      </small>
    </div>
  );
}

export default App;
