import React from "react";
import { movies } from "./MovieJSON";
import "../css/DisplayJSON.css";

const DisplayJSON = () => {
  // console.log(movies[0].name)
  return (
    <>
      <div className="DisplayJSON">
        <h1 className="DisplayJSONH1">In Theaters Now</h1>
        <div className="DisplayJSON-MovieContainer">
          {movies.map((e, i) => 
            <div key={`MovieDiv${i}`} className="DisplayJSON-Movie">
              <img src={e.src} alt={e.name} height={"70"}/>
              <p>{e.name}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayJSON;
