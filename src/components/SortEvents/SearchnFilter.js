import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchnFilter.css";
import Data from "../../data/events.json";
// import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
function SearchnFilter({ data, setdata }) {
  const [highlightvalue, sethighlightvalue] = useState();
  const [searchtxt, setsearchtxt] = useState("");
  const [mobileView, setmobileView] = useState(window.innerWidth < 1050);

  const updateMedia = () => {
    setmobileView(window.innerWidth < 1050);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  let changeFilter = (filter) => {
    var newData = [];
    switch (filter) {
      case "Upcoming":
        newData = Data.filter((d) => {
          var parts = d.startDate.split("/");
          var eventDate = new Date(parts[2], parts[1] - 1, parts[0]);
          var currDate = new Date();
          return currDate < eventDate;
        });
        console.log(newData);
        break;
      case "Ongoing":
        newData = Data.filter((d) => {
          var parts = d.startDate.split("/");
          var part = d.startDate.split("/");
          var startDate = new Date(parts[2], parts[1] - 1, parts[0]);
          var endDate = new Date(part[0], part[1] - 1, part[2]);
          var currDate = new Date();
          return currDate >= startDate && currDate <= endDate;
        });
        break;
      case "Ended":
        newData = Data.filter((d) => {
          var parts = d.startDate.split("/");
          var eventDate = new Date(parts[2], parts[1] - 1, parts[0]);
          var currDate = new Date();
          return currDate > eventDate;
        });
        break;
      case "inPerson":
        newData = Data.filter((d) => d.location === "In-Person");
        break;
      case "online":
        newData = Data.filter((d) => d.location === "online");
        break;

      default:
        newData = [];
    }
    setdata(newData);
  };
  let sortChange = (sortProperty)=>{
    if (sortProperty === "prize") {
            const sorted = [...Data].sort((a, b) => (parseInt(b[sortProperty]) > parseInt(a[sortProperty]) ? 1 : -1));
            setdata(sorted);
         } else if (sortProperty === "name") {
            const sorted = [...Data].sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
            setdata(sorted);
         } 
          else if (sortProperty==="default"){
            setdata(Data) 
          }
         else {
            const sorted = [...Data].sort((a, b) => (b[sortProperty] < a[sortProperty] ? 1 : -1));
            setdata(sorted);
         }
  }

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
            onClick={() => {
              sethighlightvalue("Upcoming");
              changeFilter("Upcoming");
            }}
            id={highlightvalue === "Upcoming" ? "Events-selected" : ""}
          >
            Upcoming
          </p>
          <p
            className="Events-headerp"
            onClick={() => {
              sethighlightvalue("Ongoing");
              changeFilter("Ongoing");
            }}
            id={highlightvalue === "Ongoing" ? "Events-selected" : ""}
          >
            Ongoing
          </p>
          <p
            className="Events-headerp"
            onClick={() => {
              sethighlightvalue("Ended");
              changeFilter("Ended");
            }}
            id={highlightvalue === "Ended" ? "Events-selected" : ""}
          >
            Ended
          </p>
          <div className="location-filter  Events-headerp">
            <p style={{ fontWeight: "700", color: "black" }}>Location</p>
            <p
              className="lcfilters"
              onClick={() => {
                sethighlightvalue("inPerson");
                changeFilter("inPerson");
              }}
              id={highlightvalue === "inPerson" ? "Events-selected" : ""}
            >
              In-Person
            </p>
            <p
              className="lcfilters"
              onClick={() => {
                sethighlightvalue("online");
                changeFilter("online");
              }}
              id={highlightvalue === "online" ? "Events-selected" : ""}
            >
              Online
            </p>
            
          </div>
          <div  className="Events-headerp">
             
              <select className="SearchnFilter-select" onChange={(e) => sortChange(e.target.value)}>
              <option value="default">Sort by</option>
                <option value="prize">Prize</option>
                <option value="name">Name</option>
                <option value="deadline">Registration Deadline</option>
                <option value="startDate">Start Date</option>
                <option value="endDate">End Date</option>
              </select>
            </div>
        </div>
      ) : (
        <div className="SearchnFilter-mobileview">
          <div style={{ display: "flex",justifyContent:"center",alignItems:"center" }}>
            <p
              className="Events-headerp"
              style={{ marginLeft: "0" }}
              onClick={() => {
                sethighlightvalue("Upcoming");
                changeFilter("Upcoming");
              }}
              id={highlightvalue === "Upcoming" ? "Events-selected" : ""}
            >
              Upcoming
            </p>
            <p
              className="Events-headerp"
              onClick={() => {
                sethighlightvalue("Ongoing");
                changeFilter("Ongoing");
              }}
              id={highlightvalue === "Ongoing" ? "Events-selected" : ""}
            >
              Ongoing
            </p>
            <p
              className="Events-headerp"
              onClick={() => {
                sethighlightvalue("Ended");
                changeFilter("Ended");
              }}
              id={highlightvalue === "Ended" ? "Events-selected" : ""}
            >
              Ended
            </p>
            <div className="location-filter">
           
            <NavDropdown
              id="SearchnFilter-mobileLocation"
              title="Location"
              className="Events-headerp"
              menuVariant="dark"
              style={{color:"white",textDecoration:"none"}}
            >
              <NavDropdown.Item  onClick={() => {
                sethighlightvalue("inPerson");
                changeFilter("inPerson");
              }}>In-person</NavDropdown.Item>
              <NavDropdown.Item   onClick={() => {
                sethighlightvalue("online");
                changeFilter("online");
              }}>
                Online
              </NavDropdown.Item>
              
            </NavDropdown>
         
            </div>
          </div>
          <select className="SearchnFilter-select" onChange={(e)=> sortChange(e.target.value)}>
          <option value="default">Sort by</option>
            <option value="prize">Prize</option>
            <option value="name">Name</option>
            <option value="deadline">Registration Deadline</option>
            <option value="startDate">Start Date</option>
            <option value="endDate">End Date</option>
          </select>
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
          <div>
          
          
       </div>
        </div>
          
        
   
      )}
    </div>
  );
}

export default SearchnFilter;
