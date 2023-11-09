import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ReactBasics() {
  const reload = () => {
    // setTimeout(() => {
    //   window.location.reload();
    // }, 100);
  };

  return (
    <>
      <div className="module_btns">
        <Link to="/ReactBasics/HelloWorld">
          <button onClick={reload}>ClassComponentEg1</button>
        </Link>
        <Link to="/ReactBasics/CelebrationInvitation">
          <button onClick={reload}>Celebration Invitation</button>
        </Link>
        <Link to="/ReactBasics/HomeEssentials">
          <button onClick={reload}>Home Essentials</button>
        </Link>
        <Link to="/ReactBasics/WelcomePage">
          <button onClick={reload}>Welcome Page</button>
        </Link>
        <Link to="/ReactBasics/VotersList">
          <button onClick={reload}>Voters List</button>
        </Link>
        <Link to="/ReactBasics/AlumniMeet">
          <button onClick={reload}>Alumni Meet</button>
        </Link>
      </div>
    </>
  )
}

export default ReactBasics;
