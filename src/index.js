import React from "react";
import ReactDOM from "react-dom/client";
import allRecipesData from "./data";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App allRecipes={allRecipesData} />
  </React.StrictMode>
);
