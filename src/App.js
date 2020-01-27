import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ShowPost } from "./Container/showPost";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Render Props</h3>-
        <div>
          <ShowPost />
        </div>
      </header>
    </div>
  );
}

export default App;
