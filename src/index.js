import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

// initialize redux
// provider will keep track of the store from anywhere in app

// Components imports
import App from "./App";

//find the minimized version of bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// CSS imports
import "./css/index.css";

// createStore takes in the reducers and compose function

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);