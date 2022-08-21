import React, { useEffect } from "react";
import "./App.css";
import { Header, Events, Footer } from "./components/index";

function App({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  });
  return (
    <div className="main-div">
      <Header />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
