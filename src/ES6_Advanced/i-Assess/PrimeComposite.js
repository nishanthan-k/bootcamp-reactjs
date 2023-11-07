import React, { useState } from "react";

const PrimeComposite = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Check");
  const [isSubmittted, setIsSubmitted] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    let value = Number(input);

    if (value === 1) {
      setOutput("Neither Prime nor Composite");
    } else if (value === 2) {
      setOutput("Prime Number");
    } else {
      for (let i = 2; i < value / 2; i++) {
        if (value % i === 0) {
          setOutput("Composite Number");
          break;
        } else {
          setOutput("Prime Number");
        }
      }
    }
  };
  return (
    <>
      <div>
        <form>
          <label>
            Enter the number:
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={calculate}>Submit</button>
          </label>
        </form>
        <br />
        {isSubmittted && <div>Output: {output}</div>}
      </div>
    </>
  );
};

export default PrimeComposite;
