import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const ConditionalRendering = (props) => {
  const arr = [1, 2, 3, 4, 5, 6];
  let textVar = 1;
  let selectVar = 1;
  const fieldItems = arr.map((ele, index) => {
    if (index % 2 === 0) {
      return (
        <div key={`Return ${index}`} className="ConditionalRenderingReturn">
          <p key={`ReturnP ${index}`} className="ConditionalRenderingPTag">Text field {textVar++}</p>
          <InputField key={`ReturnField ${index}`} />
        </div>
      );
    } else {
      return (
        <div key={`Return ${index}`} className="ConditionalRenderingReturn">
          <p  key={`ReturnP ${index}`}className="ConditionalRenderingPTag">Select field {selectVar++}</p>
          <SelectField key={`ReturnField ${index}`} />
        </div>
      );
    }
  });
  return (
    <>
      <h1 className="ConditionalRenderingH1">Form Fields</h1>
      <div className="ConditionalRendering">{fieldItems}</div>
    </>
  );
};

export default ConditionalRendering;
