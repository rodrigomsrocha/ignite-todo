import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./global.css";
import { makeServer } from "./services/server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
