import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ES6Basics() {
  const reload = () => {
    // setTimeout(() => {
    //   window.location.reload()
    // }, 100);
  };
  
  return (
    <>
      <div className="module_btns">
        <Link to="/ES6Basics/Factorial">
          <button onClick={reload}>Factorial</button>
        </Link>
        <Link to="/ES6Basics/Rest">
          <button onClick={reload}>Rest</button>
        </Link>
        <Link to="/ES6Basics/Spread">
          <button onClick={reload}>Spread</button>
        </Link>
        <Link to="/ES6Basics/Filter">
          <button onClick={reload}>Filter</button>
        </Link>
        <Link to="/ES6Basics/Map1">
          <button onClick={reload}>Map1</button>
        </Link>
        <Link to="/ES6Basics/Reduce">
          <button onClick={reload}>Reduce</button>
        </Link>
        <Link to="/ES6Basics/Sort">
          <button onClick={reload}>Sort</button>
        </Link>
        <Link to="/ES6Basics/Sort">
          <button onClick={reload}>Sort</button>
        </Link>
        <Link to="/ES6Basics/Find">
          <button onClick={reload}>Find</button>
        </Link>
        <Link to="/ES6Basics/Map2">
          <button onClick={reload}>Map2</button>
        </Link>
        <Link to="/ES6Basics/String_Length">
          <button onClick={reload}>String Length</button>
        </Link>
        <Link to="/ES6Basics/Spread2">
          <button onClick={reload}>Spread 2</button>
        </Link>
        <Link to="/ES6Basics/Filter1">
          <button onClick={reload}>Filter 1</button>
        </Link>
        <Link to="/ES6Basics/Sort1">
          <button onClick={reload}>Sort 1</button>
        </Link>
      </div>
    </>
  );
}

export default ES6Basics;