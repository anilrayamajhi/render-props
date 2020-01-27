import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Resource } from "./Container/Resource";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Render Props</h3>-
        <div>
          <Resource URL="https://gilog.herokuapp.com/api/posts" />
        </div>
      </header>
    </div>
  );
}

export default App;
