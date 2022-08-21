import React from "react";
import "./Header.css";
import bg from "../../assets/bg.svg";
// import { SVG } from "../index";
// import { Canvas } from "@react-three/fiber";
// import Model from "../model/Model";
// import background from "../../assets/bg.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="text-div">
        <h2>Excel 2022</h2>
      </div>
      <img src={bg} alt="" />
    </div>
  );
};

export default Header;
