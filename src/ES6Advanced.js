import { Link } from "react-router-dom/cjs/react-router-dom.min";
// import { useHistory as history } from "react-router-dom/cjs/react-router-dom.min";

function ES6Advanced() {
  const reload = () => {
    setTimeout(() => {
      window.location.reload()
    }, 100);
  };
  
  return (
    <>
      <div className="module_btns">
        <Link to="/ES6Advanced/Set">
          <button onClick={reload}>Set</button>
        </Link>
        <Link to="/ES6Advanced/Promises">
          <button onClick={reload}>Promises</button>
        </Link>
        <Link to="/ES6Advanced/Object_entries">
          <button onClick={reload}>Object_entries</button>
        </Link>
        <Link to="/ES6Advanced/LeftRightShift">
          <button onClick={reload}>LeftRightShift</button>
        </Link>
        <Link to="/ES6Advanced/AsyncAwait">
          <button onClick={reload}>AsyncAwait</button>
        </Link>
        <Link to="/ES6Advanced/SayHello">
          <button onClick={reload}>Say Hello</button>
        </Link>
        <Link to="/ES6Advanced/GradeCalculation">
          <button onClick={reload}>Grade Calculation</button>
        </Link>
        <Link to="/ES6Advanced/BookCategories">
          <button onClick={reload}>Book Category</button>
        </Link>
        <Link to="/ES6Advanced/ShoppingCart">
          <button onClick={reload}>Books Available</button>
        </Link>
        <Link to="/ES6Advanced/ShoppingCart">
          <button onClick={reload}>Shopping Cart</button>
        </Link>
        <Link to="/ES6Advanced/PrimeComposite">
          <button onClick={reload}>Prime / Composite</button>
        </Link>
      </div>
    </>
  );
}

export default ES6Advanced;