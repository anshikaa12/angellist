import React from "react";
import { useState } from "react";
import { useFilter } from "../contexts/filtercontext";

function Filter() {
  const { filterDispatch } = useFilter();

  const [loc, setLoc] = useState("Newyork");
  const [beds, setbeds] = useState("2");
  const [price, setPrice] = useState("3000");
  const [type, setType] = useState("house");
  function clickHandler() {
    filterDispatch({
      type: "FILTER",
      payload: { loc: loc, beds: beds, price: price, type: type },
    });
  }
  function clearHandler() {
    filterDispatch({
      type: "FILTER",
      payload: { loc: "", beds: 0, price: 0, type: "" },
    });
  }
  return (
    <div className="filter">
      <ul className="filter-list flex-row">
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Location</div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
            >
              <option value="Newyourk">Newyork</option>
              <option value="India">India</option>
              <option value="Tokyo">Tokyo</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">
            Number of Beds (less than equal to)
          </div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={beds}
              onChange={(e) => setbeds(e.target.value)}
            >
              <option value="2">2</option>
              <option value="6">6</option>
              <option value="15">15</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">
            Price (less than equal to)
          </div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="3000">3000</option>
              <option value="8000">8000</option>
              <option value="10000">15000</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Property</div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="house">house</option>
              <option value="bunglow">bunglow</option>
              <option value="flat">flat</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <button className="small-btn btn-primary" onClick={clickHandler}>
            Search
          </button>
          <button
            className="small-btn btn-primary-outline"
            onClick={clearHandler}
          >
            Clear All
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
