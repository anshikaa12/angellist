import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="first-nav flex-row-center">
          <i className="fas fa-envelope logo-icon h2-text"></i>
          <h2 className="h2-text">Estatery</h2>
        </div>
        <div className="mid-nav">
          <ul className="nav-links">
            <li className="li-link">Rent</li>
            <li className="li-link">Buy</li>
            <li className="li-link">sell</li>
          </ul>
        </div>
        <div className="last-nav">
          <input type="text" className="input-box" placeholder="Search" />
          <ul className="nav-connect nav-links">
            <li className="connect-link h6-text flex-col-center">
              <button className="mid-btn btn-primary">Login</button>
            </li>
            <li className="connect-link h6-text flex-col-center">
              <button className="mid-btn btn-primary-outline">Signup</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
