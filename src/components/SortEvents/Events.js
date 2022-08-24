import React, { useState } from "react";
import Card from "../Card/Card";
import "./Events.css";
import Data from "../../data/events.json";

import { BsSearch } from "react-icons/bs";
const Events = () => {
  const [searchtxt, setsearchtxt] = useState("");
  const [data, setdata] = useState(Data);

  let handlesearch = (e) => {
    console.log(e.target.value);
    setsearchtxt(e.target.value);
    if (e.target.value !== "") {
      const modified = Data.filter(
        (itm) =>
          itm.name &&
          itm.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log(modified)
      setdata(modified);
    } else {
      setdata(Data);
    }
  };

  return (
    <div className="events">
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <div className="Events-searchbox">
         
          <input
            type="text"
            className="Events-serchbar"
            onChange={handlesearch}
            value={searchtxt}
            placeholder="Search"
          ></input>
          <BsSearch></BsSearch>
        </div>

        <p className="Events-headerp">Upcoming</p>
        <p className="Events-headerp">Ongoing</p>
        <p className="Events-headerp">Ended</p>
        <p className="Events-headerp">Filter</p>
      </div>

      {data.map((itm) => {
        return <Card {...itm} />;
      })}
    </div>
  );
};

export default Events;
