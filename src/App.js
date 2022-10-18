import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Events, Footer } from "./components/index";
import { Html, useProgress } from "@react-three/drei";
import Mascot from "./assets/mascot.svg";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
// import { useRef } from "react";
// import * as THREE from "three";
function Loader() {
  const { progress } = useProgress();

  return (
    <Html
      position={[-2.5, 2.5, 0]}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "700",
      }}
    >
      <img src={Mascot} alt="" style={{ width: "400px", height: "auto" }} />
      {Math.floor(progress)} % loaded
    </Html>
  );
}

function App({ hideLoader }) {
  const [body, setBody] = useState(false);
  useEffect(() => {
    hideLoader();
  });
  const [mobileView, setmobileView] = useState(window.innerWidth < 1050);

  const updateMedia = () => {
    setmobileView(window.innerWidth < 1050);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div className="main-div">
      <Canvas id="react-three-container" shadows>
        <Suspense fallback={<Loader />}>
          <Header setBody={setBody} />
        </Suspense>
      </Canvas>
      {mobileView === false ? (
        body && (
          <div
            style={{
              position: "absolute",
              top: "0",
              width: "100vw",
              height: "100vh",
              background:
                "background: radial-gradient(32.47% 7.68% at 50% 2.35%, rgba(238, 240, 241, 0.38) 0%, rgba(10, 126, 162, 0.38) 100%), linear-gradient(180deg, #56D0B5 0%, #037DA9 19.06%)",
            }}
          >
            <Events />
            <Footer />
          </div>
        )
      ) : (
        <div
          style={{
            background:
              "background: radial-gradient(32.47% 7.68% at 50% 2.35%, rgba(238, 240, 241, 0.38) 0%, rgba(10, 126, 162, 0.38) 100%), linear-gradient(180deg, #56D0B5 0%, #037DA9 19.06%)",
          }}
        >
          <Events />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
