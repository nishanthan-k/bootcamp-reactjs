import React from "react";
import "../css/NavHeader.css"

const NavHeader = () => {
  return (
    <>
      <div className="header">
        <div className="show-time">ShowTime</div>

        <u className="header-list">
          <li className="nav-list-links">Term Insurance</li>
          <li className="nav-list-links">Customer Service</li>
          <li className="nav-list-links">About Us</li>
        </u>
      </div>
    </>
  );
};

export default NavHeader;
