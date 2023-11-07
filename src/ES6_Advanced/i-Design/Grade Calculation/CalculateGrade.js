import { React, useState } from "react";

const CalculateGrade = (props) => {
  const [output, setOutput] = useState("");
  let arr = props.input.split(",");
  arr = arr.map(Number);
  setOutput(Math.sum(arr) / arr.length >= 70 ? "Pass" : "Fail");

  return (
    <>
      <div>Output: {output}</div>
    </>
  );
};

export default CalculateGrade;
