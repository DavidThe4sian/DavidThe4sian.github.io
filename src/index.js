import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import {HashRouter} from "react-router-dom";

// Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
      <App />
  </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
