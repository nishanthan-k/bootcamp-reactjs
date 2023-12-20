import React from "react";
import "../css/loginHeader.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const LoginHeader = () => {
  const location = useLocation();

  return (
    <div className="LoginHeader">
      <p>Admin Login</p>
      <div className="user-img">
        {location.state && (
          <img src={location.state.UserImg} alt="user img" width={50} />
        )}
      </div>
    </div>
  );
};

export default LoginHeader;
