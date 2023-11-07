import React from "react";
import './VotersList.css'

const VotersList = () => {
  const voters = [
    { name: "Alex", age: 10, gender: "Male" },
    { name: "Ajay", age: 20, gender: "Male" },
    { name: "Barathi", age: 30, gender: "Female" },
    { name: "Cindrella", age: 18, gender: "Female" },
    { name: "Daniel", age: 25, gender: "Male" },
    { name: "Sara", age: 20, gender: "Female" },
    { name: "Nickolas", age: 40, gender: "Male" },
    { name: "Alen", age: 35, gender: "Female" },
    { name: "Mitra", age: 15, gender: "Female" },
    { name: "Philip", age: 70, gender: "Male" },
  ];
  const eligibleVoters = [];
  const nonEligibleVoters = [];

  voters.map(ele => {
    if (ele.age >= 18) {
      eligibleVoters.push(ele);
    } else {
      nonEligibleVoters.push(ele);
    }
  })
  return (
    <>
      <div id="content">
        <h2 id="election-announcement">Election Announcements</h2>

        <p>
          An election is a formal group decision-making process by which a
          population chooses an individual to hold public office.[1] Elections
          have been the usual mechanism by which modern representative democracy
          has operated since the 17th century. Elections may fill offices in the
          legislature, sometimes in the executive and judiciary, and for
          regional and local government. This process is also used in many other
          private and business organizations, from clubs to voluntary
          associations and corporations.
        </p>

        <h2 id="eligible-vote">Eligible to Vote</h2>
        <ul id="eligible-voters">
          {eligibleVoters.map((ele, i) => 
            <li key={`voters${i}`} id={`voters${i}`}>{ele.name}</li>
          )}
        </ul>

        <h2 id="non-eligible-vote">Not Eligible to Vote</h2>
        <ul id="non-eligible-voters">
          {nonEligibleVoters.map((ele, i) => 
            <li key={`voters${i}`} id={`voters${i}`}>{ele.name}</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default VotersList;
