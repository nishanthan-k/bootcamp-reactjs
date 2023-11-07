import React, { useState } from "react";

const AsyncAwait = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const findAbsolute = (n) => {
    const prom = new Promise((resolve, reject) => {
      if (isNaN(n)) {
        reject("Invalid");
      } else {
        resolve("Absolute Value!!");
      }
    });
    return prom;
  };

  const findResult = async (e) => {
    e.preventDefault();
    try {
      let result = await findAbsolute(input);
      setOutput(result);
    } catch (error) {
      setOutput(error);
    }
  };

  return (
    <>
      <form onSubmit={findResult}>
        <label>
          Enter the value of n :
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <div>Async Await: {output}</div>
    </>
  );
};

export default AsyncAwait;
