import React, { useEffect, useState } from "react";
import Data from "../../data/events.json";
import { BsSearch } from "react-icons/bs";
import "./SearchnFilter.css";
function SearchnFilter({ data, setdata }) {
  const [highlightvalue, sethighlightvalue] = useState();
  const [searchtxt, setsearchtxt] = useState("");
  const [mobileView, setmobileView] = useState(window.innerWidth < 600);

  const updateMedia = () => {
    setmobileView(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
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
 
  console.log(highlightvalue);
  return (
    <div className="SearchnFilter-maindiv">
      {mobileView === false ? (
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

          <p
              className="Events-headerp"
              onClick={() => sethighlightvalue("Upcoming")}
              id={highlightvalue === "Upcoming" ? "Events-selected" : ""}
            >
              Upcoming
            </p>
          <p
            className="Events-headerp"
            onClick={() => sethighlightvalue("Ongoing")}
            id={highlightvalue === "Ongoing" ? "Events-selected" : ""}
          >
            Ongoing
          </p>
          <p
            className="Events-headerp"
            onClick={() => sethighlightvalue("Ended")}
            id={highlightvalue === "Ended" ? "Events-selected" : ""}
          >
            Ended
          </p>
          <p
            className="Events-headerp"
            onClick={() => sethighlightvalue("Filter")}
            id={highlightvalue === "Filter" ? "Events-selected" : ""}
          >
            Filter
          </p>
        </div>
      ) : (
        <div className="SearchnFilter-mobileview">
          <div style={{ display: "flex" }}>
            <p
              className="Events-headerp"
              style={{marginLeft:"0"}}
              onClick={() => sethighlightvalue("Upcoming")}
              id={highlightvalue === "Upcoming" ? "Events-selected" : ""}
            >
              Upcoming
            </p>
            <p
              className="Events-headerp"
              onClick={() => sethighlightvalue("Ongoing")}
              id={highlightvalue === "Ongoing" ? "Events-selected" : ""}
            >
              Ongoing
            </p>
            <p
              className="Events-headerp"
              onClick={() => sethighlightvalue("Ended")}
              id={highlightvalue === "Ended" ? "Events-selected" : ""}
            >
              Ended
            </p>
            <p
              className="Events-headerp"
              onClick={() => sethighlightvalue("Filter")}
              id={highlightvalue === "Filter" ? "Events-selected" : ""}
            >
              Filter
            </p>
          </div>
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
        </div>
      )}
    </div>
  );
}

export default SearchnFilter;
