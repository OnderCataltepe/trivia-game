import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  ContextProvider,
  ContextPagesProvider,
} from "./ContextAndApi/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextPagesProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ContextPagesProvider>
  </React.StrictMode>
);
