import { React, useState } from "react";

const CalculateGrade = (props) => {
  const [output, setOutput] = useState("");
  let arr = props.input.split(",");
  arr = arr.map(Number);
  
  
  const updateOutput = () => {
    const sum = arr.reduce((e, i) => e + i, 0);
  
    if (sum / arr.length >= 70) {
      setOutput('Pass')
    } else {
      setOutput('Fail');
    }
  
    return output;
  }
  

  return (
    <>
      <div>Output: {updateOutput}</div>
    </>
  );
};

export default CalculateGrade;
