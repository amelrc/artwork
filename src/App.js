import React from "react";
import "./styles.css";
import { data } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>{data.painting.series.map(s => s.id)}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
