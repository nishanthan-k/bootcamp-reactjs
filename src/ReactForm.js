import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Buttons.css"

function ReactForms() {
  const reload = () => {
    // setTimeout(() => {
    //   window.location.reload()
    // }, 100);
  };
  
  return (
    <>
      <div className="ModuleBtns">
        <Link to="/ReactForms/LoginForm">
          <button onClick={reload}>LoginForm</button>
        </Link>
        <Link to="/ReactForms/LoginLogout">
          <button onClick={reload}>LoginLogout</button>
        </Link>
      </div>
    </>
  );
}

export default ReactForms;