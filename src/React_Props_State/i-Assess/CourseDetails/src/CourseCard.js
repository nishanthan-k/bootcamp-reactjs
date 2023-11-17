import React from "react";
import "../css/CourseCard.css";

const CourseCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="CourseCard">
        <p className="CourseCardEBox">E-Box Exclsive</p>

        <div className="CourseCardContent">
          <div className="CourseCardTitle">COURSE DETAILS</div>
          <div className="courseId">
            <span className="CourseIdText">CourseId</span>{" "}
            <span className="courseIdNumber">{props.courseData.courseId}</span>
          </div>
          <div className="CourseCardDetail">
            <div className="CourseCardDetailData">
              <span>Course Name</span>
              <span className="CourseDetailData">{props.courseData.courseName}</span>
            </div>
            <div className="CourseCardDetailData">
              <span>Skills Offerred</span>
              <span className="CourseDetailData">{props.courseData.skills}</span>
            </div>
            <div className="CourseCardDetailData">
              <span>Description</span>
              <span className="CourseDetailData CourseCardDescription">{props.courseData.description}</span>
            </div>
            <div className="CourseCardDetailData">
              <span>Platform</span>
              <span className="CourseDetailData">{props.courseData.platform}</span>
            </div>
            <div className="CourseCardDetailData">
              <span>Platform</span>
              <span className="CourseDetailData">{props.courseData.platform}</span>
            </div>
            <div className="CourseCardDetailData">
              <span>Amount</span>
              <span className="CourseDetailData">Rs.{props.courseData.Amount}/-</span>
            </div>
            <div className="CourseCardDetailData">
              <span>Place</span>
              <span className="CourseDetailData">{props.courseData.place}</span>
            </div>
            <div className="CourseCardDetailData">
              <span>Mode</span>
              <span className="CourseDetailData">{props.courseData.mode}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
