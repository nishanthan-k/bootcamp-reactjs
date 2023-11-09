import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Buttons = () => {
  const reload = () => {
    // setTimeout(() => {
    //   window.location.reload()
    // }, 100);
  };

  return (
    <>
      <div className="GeneralBtnsContainer">
        <div className="GeneralBtns">
          <Link to="ES6Basics">
            <button onClick={reload}>ES6Basics</button>
          </Link>
          <Link to="ES6Advanced">
            <button onClick={reload}>ES6Advanced</button>
          </Link>
          <Link to="ReactBasics">
            <button onClick={reload}>React Basics</button>
          </Link>
          <Link to="ReactComponents">
            <button onClick={reload}>React Components</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Buttons;
