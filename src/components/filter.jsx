import React from "react";
import { useState } from "react";

function Filter() {
  const [value, setValue] = useState("fruits");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className="filter">
      <ul className="filter-list flex-row">
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Location</div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={value}
              onChange={handleChange}
            >
              <option value="Newyourk">NewYork</option>
              <option value="India">India</option>
              <option value="Tokyo">Tokyo</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Number of Beds</div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={value}
              onChange={handleChange}
            >
              <option value="2">less than 2</option>
              <option value="6">less than 6</option>
              <option value="7">greater than 6</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Price</div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={value}
              onChange={handleChange}
            >
              <option value="3000">1000-3000</option>
              <option value="8000">4000-8000</option>
              <option value="10000">8000-15000</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">Property</div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={value}
              onChange={handleChange}
            >
              <option value="house">House</option>
              <option value="bunglow">Bunglow</option>
              <option value="flat">Flat</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <button className="mid-btn btn-primary">Search</button>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
