import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/index";

function App({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  });
  return (
    <div className="main-div">
      <Header />
      <div className="body"></div>
    </div>
  );
}

export default App;
