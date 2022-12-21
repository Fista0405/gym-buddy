import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App/App";

import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyDI5o6mCzZKY4DbUIWIyRsMtBaPUiMvvj8",
  authDomain: "gym-buddy-f5e0f.firebaseapp.com",
  projectId: "gym-buddy-f5e0f",
  storageBucket: "gym-buddy-f5e0f.appspot.com",
  messagingSenderId: "340977773907",
  appId: "1:340977773907:web:810d31ab7fdeb2a3fa85a6",
  measurementId: "G-WSL2YJ2NXN",
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
