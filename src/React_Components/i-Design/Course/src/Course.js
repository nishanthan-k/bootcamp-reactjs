import React from "react";
import "../css/Course.css";
import react_logo from "../assets/react_logo.png";

const Course = () => {
  return (
    <>
      <div className="course">
        <h1>React Component Creation</h1>

        <div className="container">
          <h2>React</h2>

          <div className="table-img-course">
            <div className="courseTable">
              <table className="table-course" id="table">
                <tr className="table-tags-course">
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Cost</th>
                  <th>Certificate</th>
                </tr>

                <tr className="table-tags-course">
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
