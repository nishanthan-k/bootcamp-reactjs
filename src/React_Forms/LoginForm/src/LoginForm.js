import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/loginForm.css";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formValues;

    if (username === "admin") {
      history.push("/ReactForms/LoginForm/AdminView");
    } else {
      history.push({
        pathname: "/ReactForms/LoginForm/UserView",
        state: {username}
      });
    }
  };

  return (
    <div className="LoginForm-container">
      <div className="LoginForm">
        <div>
          <p>Login Form</p>
        </div>
        <form className="LoginForm-form" onSubmit={handleSubmit}>
          <fieldset>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setFormValues((prevValues) => {
                  return { ...prevValues, username: e.target.value };
                })
              }
            />
          </fieldset>
          <fieldset>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setFormValues((prevValues) => {
                  return { ...prevValues, password: e.target.value };
                })
              }
            />
          </fieldset>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
