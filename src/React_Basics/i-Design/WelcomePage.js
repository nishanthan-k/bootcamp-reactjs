import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <>
      <div>
        <div id="home">
          <p>Home Page</p>
        </div>

        <div id="content">
          <h1>WELCOME TO MOVIE BOOK</h1>

          <h2>Book your favourite movies here</h2>

          <hr />
          
          <ul>
            <li id="li-1">Spider-Man:Homecoming (3D)</li>
            <li id="li-2">War of the planet of the Apes(3D)</li>
            <li id="li-3">Despicable Me 3 (3D)</li>
          </ul>

          <hr />

        </div>
      </div>
    </>
  );
};

export default WelcomePage;
