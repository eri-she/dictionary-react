import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="Title">Dictionary</div>
      <div className="Subtitle">
        <span>|</span> Choose your words wisely.
      </div>
      <Dictionary />
      <small className="Footer">coded by Ericka Angeles</small>
    </div>
  );
}

export default App;
