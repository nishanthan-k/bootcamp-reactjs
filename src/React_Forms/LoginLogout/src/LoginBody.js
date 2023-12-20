import React, { useState } from "react";
import "../css/loginBody.css";
import { userList } from "./userList";
import UserImg from "../assets/images/user.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserDisplay from "./UserDisplay"

const LoginBody = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    errorAvailable: false,
    errorMsg: "",
  });
  const [isUserAvailable, setIsUserAvailable] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formValues;

    userList.map((user, index) => {
      if (user.username === username) {
        if (user.password === password) {
          if (user.role === "admin") {
            history.push({
              pathname: "/ReactForms/LoginLogout",
              state: { UserImg },
            });
            setIsAdmin(!isAdmin);
          } else {
            setError((prevValues) => {
              return {
                ...prevValues,
                errorAvailable: !error.errorAvailable,
                errorMsg: "This user does not have access to login",
              };
            });
          }
        } else {
          setError((prevValues) => {
            return {
              ...prevValues,
              errorAvailable: !error.errorAvailable,
              errorMsg: "Invalid Password",
            };
          });
        }
      } else if (index === userList.length - 1) {
        setIsUserAvailable(!isUserAvailable);
      }
    });

    if (isUserAvailable === false) {
      setError((prevValues) => {
        return {
          ...prevValues,
          errorAvailable: !error.errorAvailable,
          errorMsg: "User does not exist",
        };
      });
    }
  };

  return (
    <div className="LoginBody-container">
      {!isAdmin ? (
        <div className="LoginBody">
          <h1>Admin Login</h1>
          <form className="form">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={(e) =>
                setFormValues((prevValues) => {
                  return { ...prevValues, username: e.target.value };
                })
              }
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setFormValues((prevValues) => {
                  return { ...prevValues, password: e.target.value };
                })
              }
            />
            {error.errorAvailable && (
              <p style={{ color: "red", fontSize: "16px" }}>{error.errorMsg}</p>
            )}
            <button onClick={(e) => handleSubmit(e)}>Login</button>
          </form>
        </div>
      ) : (
        <UserDisplay />
      )}
    </div>
  );
};

export default LoginBody;
