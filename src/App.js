import React from "react";
import "./App.css";
// import { Resource } from "./Container/ResourceHook";
import { ResourceComponent } from "./Container/ResourceComponent";
import { ResourceHook } from "./Container/ResourceHook";
import { PostWidget } from "./Component/PostWidget";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <div className="Col-6">
            <h3>Render Props Component</h3>-
            <div>
              <ResourceComponent
                URL="https://gilog.herokuapp.com/api/posts"
                bottle={data => {
                  if (data.loading) return <p>Loading...</p>;
                  return data.payload.map(metadata => (
                    <PostWidget key={metadata._id} {...metadata} />
                  ));
                }}
              />
            </div>
          </div>
          <div className="Col-6 Tile-2">
            <h3>Render Props Hooks</h3>-
            <div>
              <ResourceHook
                URL="https://gilog.herokuapp.com/api/posts"
                render={data => {
                  if (data.loading) return <p>Loading...</p>;
                  return data.payload.map(metadata => (
                    <PostWidget key={metadata._id} {...metadata} />
                  ));
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
