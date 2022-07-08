import React from "react";
import Card from "../components/card";
import Filter from "../components/filter";
import Nav from "../components/nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="main-sec flex-col">
        <div className="heading-main">
          <h2 className="h2-text">Search Properties to rent</h2>
        </div>
        <div className="filter-sec">
          <Filter />
        </div>

        <Card />
      </div>
    </div>
  );
}

export default Home;
