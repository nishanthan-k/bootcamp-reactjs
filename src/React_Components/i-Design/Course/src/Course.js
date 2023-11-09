import React from "react";
import "../css/Course.css";
import react_logo from "../assets/react_logo.png";

const Course = () => {
  return (
    <>
      <div className="Course">
        <h1 className="CourseTitle">React Component Creation</h1>

        <div className="CourseContent">
          <h2 className="CourseTitleH2">React</h2>

          <div className="CourseTableWholeContent">
            <div className="CourseTableContent">
              <table className="CourseTable" id="table">
                <tr className="CourseTableTag">
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Cost</th>
                  <th>Certificate</th>
                </tr>

                <tr className="CourseTableTag">
                  <td>React</td>
                  <td>20 hourse</td>
                  <td>9,999 only</td>
                  <td>E-box Certificate</td>
                </tr>
              </table>
            </div>

            <div className="image-course">
              <img src={react_logo} alt="react_logo" height={"210"} width={"190"} />
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default Course;
