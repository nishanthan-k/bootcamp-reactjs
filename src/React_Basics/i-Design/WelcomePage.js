import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {
  return (
    <>
      <div className="WelcomePage">
        <div className="WelcomePageHeader" id="home">
          <p className="WelcomePageHeaderText">Home Page</p>
        </div>

        <div className="WelcomePageContent" id="content">
          <div className="WelcomPageHeadingContent">
            <h1 className="WelcomePageHeadingH1">WELCOME TO MOVIE BOOK</h1>

            <h2 className="WelcomePageHeadingH2">Book your favourite movies here</h2>

          </div>
          
          <div className="WelcomePageList">
          <ul className="WelcomePageListList">
            <li className="WelcomePageListItems" id="WelcomePageListItem1">Spider-Man:Homecoming (3D)</li>
            <li className="WelcomePageListItems" id="WelcomePageListItem2">War of the planet of the Apes(3D)</li>
            <li className="WelcomePageListItems" id="WelcomePageListItem3">Despicable Me 3 (3D)</li>
          </ul>
          </div>


        </div>
      </div>
    </>
  );
};

export default WelcomePage;
