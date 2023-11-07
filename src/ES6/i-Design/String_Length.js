import React from "react";

const String_Length = () => {
  const input = ["Amphisoft", "Technologies", "Coimbatore"];
  const output = [];
  input.map((ele) => output.push(ele.length));
  // console.log(`Length of ${input[0]} is ${output[0]}
  // Length of ${input[1]} is ${output[1]}
  // Length of ${input[2]} is ${output[2]}`)
  return (
    <>
      <div>String_Length:
      {/* <p> */}
        {`  Length of ${input[0]} is ${output[0]} \n
         Length of ${input[1]} is ${output[1]} \n
         Length of ${input[2]} is ${output[2]}`
        }
      {/* </p> */}
      </div>
    </>
  );
};

export default String_Length;
