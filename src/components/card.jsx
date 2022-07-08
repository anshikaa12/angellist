import React from "react";
import { useFilter } from "../contexts/filtercontext";
import { houses } from "../database/houses";
import { FilteredList } from "../reducer/filterReducer";
function Card() {
  const { filterState } = useFilter();
  let updatedList =
    filterState.location !== ""
      ? FilteredList(
          filterState.location,
          filterState.beds,
          filterState.price,
          filterState.type,
          houses
        )
      : houses;

  return (
    <div className="card-sec column-3-grid">
      {updatedList.map((house) => {
        return (
          <div className="basic-card">
            <img src={house.img} className="card-img" alt="text" />
            <div className="card-body">
              <span className="card-price h4-text wt-bold">{house.price}$</span>
              <h4 className="card-title">{house.name}</h4>
              <p className="card-content">{house.address}.</p>
              <div className="card-footer">
                <div className="card-foot flex-row-center">
                  <i className="fas fa-bed"></i>
                  <p className="foot-text">{house.beds} bedroom</p>
                </div>
                <div className="card-foot flex-row-center">
                  <i className="fas fa-sink"></i>
                  <p className="foot-text">2 bathroom</p>
                </div>
                <div className="card-foot flex-row-center">
                  <i className="fas fa-cube"></i>
                  <p className="foot-text">5X7 m</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
