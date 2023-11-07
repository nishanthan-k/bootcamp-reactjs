import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ReactBasics() {
  const reload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <>
      <div className="module_btns">
        <Link to="/ReactComponents/MoviePage">
          <button onClick={reload}>Movie Booking</button>
        </Link>
        <Link to="/ReactComponents/Course">
          <button onClick={reload}>React Course</button>
        </Link>
        <Link to="/ReactComponents/Parentchild">
          <button onClick={reload}>Parent Child</button>
        </Link>
        <Link to="/ReactComponents/ReactKeys">
          <button onClick={reload}>React Keys</button>
        </Link>
        <Link to="/ReactComponents/ConditionalRendering">
          <button onClick={reload}>Conditional Rendering</button>
        </Link>
      </div>
    </>
  )
}

export default ReactBasics;
