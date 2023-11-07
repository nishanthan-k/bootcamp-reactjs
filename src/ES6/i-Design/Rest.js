import React from "react";

const Rest = () => {
  var input = [3, 5, 6];
  var [...arr] = input;
  var output = arr.reduce((val, ele) => {
    return val + ele;
  }, 0);
  return (
    <>
    <div>Rest: {output}</div>
    </>
  )
}

export default Rest;