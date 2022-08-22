import React, { useState } from "react";
import Card from "../Card/Card";
import "./Events.css";
import Data from "../../data/events.json"
const Events = () => {
  const [searchtxt,setsearchtxt] = useState("");
  const [data,setdata] = useState(Data)
  let handlesearch = (e) => {
    console.log(e.target.value);
    setsearchtxt(e.target.value);
    if (e.target.value !== "") {
      const modified = Data.filter(
        (itm) =>
          itm.name && itm.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      console.log(modified)
      setdata(modified);
    } else {
      setdata(Data);
    }
  };
  
  return (
    <div className="events">
      <input type="text" onChange={handlesearch} value={searchtxt}></input>
{
  data.map((itm)=>{
    return(
     <Card {...itm}/>
    )
  })
}
      
      
    </div>
  );
};

export default Events;
