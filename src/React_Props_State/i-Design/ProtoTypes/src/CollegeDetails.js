import React from "react";
import PropTypes from "prop-types";

const CollegeDetails = (props) => {
  // console.log(props)
  // const CollegData = Object.entries(props.data);

  props.data[2].coursesOffered.map(e => console.log(e))
  // CollegData.map((ele) => console.log(ele));
  return (
    <>
      <div className="CollegeDetails">
        <p className="CollegeDataTerms">
          College Name: {props.data[props.i].name}
        </p>
        <p className="CollegeDataTerms">
          Location: {props.data[props.i].location}{" "}
        </p>
        <p className="CollegeDataTerms">
          Affiliated to: {props.data[props.i].affiliatedTo}{" "}
        </p>
        <p className="CollegeDataTerms">
          TNEA Code: {props.data[props.i].TNEAcode}{" "}
        </p>
        <p className="CollegeDataTerms">
          Placement Record: {props.data[props.i].averagePlacementRecord}{" "}
        </p>
        <p className="CollegeDataTerms">
          Courses Offered:
          {/* <br /> */}
          <p className="CollegeCoursesOffered">
          {props.data[2].coursesOffered.map(e => <span className="CollegeCourses">{e}</span>)}
          </p>
        </p>
      </div>

      {/* <p>  */}
      {/* {
     items.map((m, i) => {
      return <a href={`#${m}`}>{(i ? ', ' : '') + m}</a>;
     })
    } */}
    </>
  );
};

export default CollegeDetails;
