import React, { useState } from "react";
import "../css/CourseDetails.css";
import CourseCard from "./CourseCard";

const CourseDetails = () => {
  const [courseData, SetCourseData] = useState({
    courseId: 2560,
    courseName: "React Bootcamp",
    skills: "HTML,CSS,Java Script,ReactJS",
    platform: "E-Box",
    "course Duration": "3 months",
    Amount: 10000,
    place: "Coimbatore",
    mode: "Online/Offline",
    description:
      "This complete React Bootcamp consists of the combination of the Fundamentals and the Advanced. It’s a fast-paced program that allows you to learn ReactJS fast in one week of full-time, in-person training. It takes place in different locations, check out the upcoming dates to find yours! If you want to make sure this is the training for you, you can try it first online.",
  });
  return (
    <>
      <div className="CourseDetails">
        <CourseCard courseData={courseData}/>
      </div>
    </>
  );
};

export default CourseDetails;
