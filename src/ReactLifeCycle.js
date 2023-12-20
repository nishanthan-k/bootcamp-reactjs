import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Buttons.css"

function ReactLifeCycle() {
  const reload = () => {
    // setTimeout(() => {
    //   window.location.reload()
    // }, 100);
  };
  
  return (
    <>
      <div className="ModuleBtns">
        <Link to="/ReactLifeCycle/DisplayJSON">
          <button onClick={reload}>Display JSON</button>
        </Link>
        <Link to="/ReactLifeCycle/MovieFilter">
          <button onClick={reload}>Movie Filter</button>
        </Link>
        <Link to="/ReactLifeCycle/MovieSearch">
          <button onClick={reload}>Movie Search</button>
        </Link>
        <Link to="/ReactLifeCycle/MovieDetail">
          <button onClick={reload}>Movie Detail</button>
        </Link>
        <Link to="/ReactLifeCycle/ComponentDidMount">
          <button onClick={reload}>ComponentDidMount</button>
        </Link>
        <Link to="/ReactLifeCycle/GetDerivedStatsFromProps">
          <button onClick={reload}>GetDerivedStatsFromProps</button>
        </Link>
        <Link to="/ReactLifeCycle/MovieBooking">
          <button onClick={reload}>MovieBooking</button>
        </Link>
        <Link to="/ReactLifeCycle/Quiz">
          <button onClick={reload}>Quiz</button>
        </Link>
      </div>
    </>
  );
}

export default ReactLifeCycle;