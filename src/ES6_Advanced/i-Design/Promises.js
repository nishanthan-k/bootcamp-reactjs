import React, { useState } from "react";

const Promises = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [output, setOutput] = useState("");

  const checkProm = (e) => {
    e.preventDefault();
    const prom = new Promise((resolve, reject) => {
      if (str1 === str2) {
        resolve("Two strings are equal");
      } else {
        reject("Two strings are not equal");
      }
    });
    prom
      .then((resolve) => setOutput(resolve))
      .catch((reject) => setOutput(reject));
  };

  return (
    <>
      <form onSubmit={checkProm}>
        <label>
          Enter String 1:
          <input
            type="text"
            value={str1}
            onChange={(e) => setStr1(e.target.value)}
          />
        </label>
        <label>
          Enter String 2:
          <input
            type="text"
            value={str2}
            onChange={(e) => setStr2(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <div>Promises output: {output}</div>
    </>
  );
};

export default Promises;
