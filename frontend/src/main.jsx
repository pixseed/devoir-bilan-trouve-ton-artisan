/**
 * ================================================================================================
 * APPLICATION ENTRY POINT
 * ================================================================================================
 * Rôle :
 * - Initialiser React.
 * - Charger les styles globaux de l'application.
 * - Monter le composant racine dans le DOM.
 * ================================================================================================
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
