import React from "react";

const CricketContent = () => {
  return (
    <>
      <div className="CricketContent">

        <div className="CricketTeams">

          <div className="TeamCSK">
            <p>CHENNAI SUPER KINGS</p>
            <img src={require("../assets/img/CSK.png")} alt="CSK Logo" />
          </div>

          <div className="CricketVS">
            <p>Vs</p>
          </div>

          <div className="TeamMI">
            <p>MUMBAI INDIANS</p>
            <img src={require("../assets/img/MI.png")} alt="MI Logo" />
          </div>

        </div>

        <div className="CricketScoreDetails">
          <h4>MI has to score 180 against CSK to win this T20</h4>
        </div>

      </div>
    </>
  );
};

export default CricketContent;
