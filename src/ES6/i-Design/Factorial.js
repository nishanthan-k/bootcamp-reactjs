import React from "react";

const Factorial = () => {
  // var fs = require("fs");
  // var input = fs.readFileSync("inputFactorial.txt").toString().trim();
  var input = 5;
  var output = 1;
  for(let i=1; i<=input; i++) {
    output *= i;
  } 
  return (
    <>
      <div>Factorial: {output}</div>
    </>
  );
};

export default Factorial;
