import React, { useState } from "react";
import Card from "../Card/Card";
import "./Events.css";
import Data from "../../data/events.json";


import SearchnFilter from "./SearchnFilter";
const Events = () => {
 
  const [data, setdata] = useState(Data);
  

  return (
    <div className="eve">
      <SearchnFilter data={data} setdata={setdata}></SearchnFilter>
      <div className="events">
        {data === [] ? (
          <p>No Data</p>
        ) : (
          data.map((itm) => {
            return <Card key={itm.description} {...itm} />;
          })
        )}
      </div>
    </div>
  );
};

export default Events;
