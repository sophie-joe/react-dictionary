import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary App</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <br />
          This project was coded by Sophie Joe and is{" "}
          <a
            href="https://github.com/sophie-joe/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
