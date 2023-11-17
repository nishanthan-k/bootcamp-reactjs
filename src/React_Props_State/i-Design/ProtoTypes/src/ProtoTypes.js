import React, { useState } from "react";
import "../css/ProtoTypes.css";
import CollegeDetails from "./CollegeDetails";

const ProtoTypes = () => {
  const [state, setState] = useState({
    collegeData: [
      {
        id: 1,
        name: "Kathir college of engineering",
        location: "Coimbatore",
        affiliatedTo: "Anna University",
        TNEAcode: 2018,
        averagePlacementRecord: 88.5,
        coursesOffered: [
          "Information Technology",
          "Computer Science ",
          "Electrical and Electronics",
        ],
      },
      {
        id: 2,
        name: "Shanmuga college of engineering",
        location: "Coimbatore",
        affiliatedTo: "EBox University",
        TNEAcode: 2028,
        averagePlacementRecord: 76,
        coursesOffered: [
          "Electrical and Electronics",
          "Electronics and Communication ",
          "Computer Science",
        ],
      },
      {
        id: 3,
        name: "United Institute of Technology",
        location: "Coimbatore",
        affiliatedTo: "Anna University",
        TNEAcode: 2056,
        averagePlacementRecord: 100,
        coursesOffered: [
          "Information Technology",
          "Agriculture ",
          "Marine",
          "Computer Science",
        ],
      },
      {
        id: 4,
        name: "VSB college of engineering",
        location: "Karur",
        affiliatedTo: "Anna University",
        TNEAcode: 2078,
        averagePlacementRecord: 90,
      },
    ],
  });

  return (
    <>
      <div className="ProtoTypes">
        <h1 className="ProtoTypesH1">Ebox Colleges</h1>

        <div className="ProtoTypesCards">
          <div className="Card">
            <CollegeDetails data={state.collegeData} i={0} />
          </div>
          <div className="Card">
            <CollegeDetails data={state.collegeData} i={1} />
          </div>
          <div className="Card">
            <CollegeDetails data={state.collegeData} i={2} />
          </div>
          <div className="Card">
            <CollegeDetails data={state.collegeData} i={3} />
          </div>

          {/* <div>{state.collegeData((e) => e)}</div> */}
        </div>
      </div>
    </>
  );
};

export default ProtoTypes;
