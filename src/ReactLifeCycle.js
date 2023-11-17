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
      </div>
    </>
  );
}

export default ReactLifeCycle;