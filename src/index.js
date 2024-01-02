import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export const ApkVersion = 1.89;
document.title = `Ryumoto GFX APK Download [Latest Version] v${ApkVersion} for Android`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
