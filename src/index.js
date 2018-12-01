import React from "react";
import ReactDOM from "react-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import Demo from "./demo";

import "./styles.css";

library.add(faCheckSquare, faSquare);

function App() {
  return (
    <div className="App">
      <h1>React Checkbox</h1>
      <p>
        We're all used to the bland HTML checkbox like this:
        <input type="checkbox" />. <br />
        What can we do to give it a little zing?
      </p>
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
