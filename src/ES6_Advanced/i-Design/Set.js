import React, { useState } from "react";

let set = new Set();
const SetComponent = () => {
  const [option, setOption] = useState("");
  const [arrElements, setArrElements] = useState([]);
  const [output, setOutput] = useState("");

  const Add = () => {
    arrElements.map(e => set.add(e));
    setOutput([...set])
    console.log(set);
  }
  

  const Delete = () => {
    var count = 0;
    arrElements.map(e => {set.delete(e); count++});
    
    if (set.size === 0) {
      setOutput('No elements in the set');
    } else if (count === 1) {
      setOutput(count + ' element was deleted');
    } else {
      setOutput(count + ' elements were deleted');
    }

    console.log('Set => ', set);
  }
  const Clear = () => {
    set.clear();
    setOutput("Set is cleared...")
    console.log('Set => ', set);
  }
  const Search = () => {
    var find = '';
    arrElements.map(e => {find +=  set.has(e) ? 'Yes ' : 'No '; console.log(find); });
    setOutput(find);
  }
  const Print = () => {
    setOutput('Set elements are :' + [...set])
  }

  const submitOption = (e) => {
    e.preventDefault();
    let userOption = Number(option);
    if (userOption !== 3 && userOption !== 5) {
      showResult(userOption)
    } else {
      showResult(userOption)
    }
  }

  const handleArrayElements = (e) => {
    let input = e.target.value;
    let ele = input.split(",");
    setArrElements(ele);
  };

  const showResult = (userOption) => {
    switch (userOption) {
      case 1:
        Add();
        break;
      case 2:
        Delete();
        break;
      case 3:
        Clear();
        break;
      case 4:
        Search();
        break;
      case 5:
        Print();
        break;
    
      default:
        break;
    }
  };
  return (
    <>
      <div>
        <p>1. Add</p>
        <p>2. Delete</p>
        <p>3. Clear</p>
        <p>4. Search</p>
        <p>5. Print</p>
      </div>
      <form onSubmit={submitOption}>
        <label>
          Enter your option:
          <input
            type="number"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
        </label>
          <label>
            Enter the elements:
            <input
              type="text"
              value={arrElements}
              onChange={handleArrayElements}
            />
          </label>
          <button>Submit</button>
        </form>
        <p>Output: {output}</p>
    </>
  );
};

export default SetComponent;
