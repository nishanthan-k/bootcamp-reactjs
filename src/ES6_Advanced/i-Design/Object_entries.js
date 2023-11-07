import React, { useState } from "react";

const input = {};
const Object_entries = () => {
  const [inputName, setInputName] = useState("");
  const [inputMark, setInputMark] = useState("");
  const [output, setOutput] = useState('');

  const addInputs = (e) => {
    e.preventDefault();
    console.log('adding inputs');
    input[inputName] = Number(inputMark);
    console.log(input);
  };

  const showResult = (e) => {
    e.preventDefault();
    let mark = 0;
    for (let [key, value] of Object.entries(input)) {
      if (value > mark) {
        setOutput(`${key} : ${value}`); 
        mark = value;
        console.log('sr mark = ', mark, key);
      }
    }
    console.log('sr output : ', output);
  };

  return (
    <>
      <form>
        <label>
          Enter name:
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </label>
        <label>
          Enter mark:
          <input
            type="number"
            value={inputMark}
            onChange={(e) => setInputMark(e.target.value)}
          />
        </label>
        <button onClick={addInputs}>Add Entries</button>
        <button onClick={showResult}>Submit</button>
      </form>
      <div>Object_entries: {output}</div>
    </>
  );
};

export default Object_entries;
