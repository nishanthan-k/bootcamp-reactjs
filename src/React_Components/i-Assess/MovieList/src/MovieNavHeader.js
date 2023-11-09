import React from "react";
import "../css/MovieNavHeader.css"

const MovieNavHeader = () => {
  return (
    <>
      <div className="MovieNavHeader">
        <div className="MovieNavHeaderShowTime">ShowTime</div>

        <u className="MovieNavHeaderHeaderList">
          <li className="MovieNavHeaderNavListLinks">Term Insurance</li>
          <li className="MovieNavHeaderNavListLinks">Customer Service</li>
          <li className="MovieNavHeaderNavListLinks">About Us</li>
        </u>
      </div>
    </>
  );
};

export default MovieNavHeader;
