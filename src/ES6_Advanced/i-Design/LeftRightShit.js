import React, { useState } from "react";

const LeftRightShift = () => {
  const [number, setNumber] = useState("");
  const [shiftNumber, setShiftNumber] = useState("");
  const [leftShiftOutput, SetLeftShiftOutput] = useState("");
  const [rightShiftOutput, SetRightShiftOutput] = useState("");
  const [isTrue, setIsTrue] = useState(false);

  const shiftOperation = (e) => {
    e.preventDefault();
    SetLeftShiftOutput(number << shiftNumber);
    SetRightShiftOutput(number >> shiftNumber);
    setIsTrue(true);
  };
  return (
    <>
      <form onSubmit={shiftOperation}>
        <label>
          Enter a number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label>
          Enter the value for shift operation:
          <input
            type="number"
            value={shiftNumber}
            onChange={(e) => setShiftNumber(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      {isTrue && (
        <div>
          <p>Left Shift: {leftShiftOutput}</p>{" "}
          <p>Right Shift: {rightShiftOutput}</p>
        </div>
      )}
    </>
  );
};

export default LeftRightShift;
