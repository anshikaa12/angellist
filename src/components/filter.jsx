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
              <option value="fruit">NewYork</option>
              <option value="vegetable">India</option>
              <option value="meat">China</option>
            </select>
          </div>
        </li>
        <li className="filter-item flex-col">
          <div className="filter-type wt-md h5-text">When</div>
          <div className="filter-type-list">
            <select
              className="wt-md h4-text"
              value={value}
              onChange={handleChange}
            >
              <option value="fruit">NewYork</option>
              <option value="vegetable">India</option>
              <option value="meat">China</option>
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
              <option value="fruit">NewYork</option>
              <option value="vegetable">India</option>
              <option value="meat">China</option>
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
              <option value="fruit">NewYork</option>
              <option value="vegetable">India</option>
              <option value="meat">China</option>
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
