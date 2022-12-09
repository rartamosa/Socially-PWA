import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import user from "../reducers/user";

const SignIn = () => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [mode, setMode] = useState("login");
  const storedToken = useSelector((store) => store.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (storedToken) {
      navigate("/");
    }
  }, [storedToken]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const submittedLogin = userLogin;
    dispatch(user.actions.logIn(submittedLogin));
  };

  const signupToggle = () => {
    setMode("signup");
  };

  const loginToggle = () => {
    setMode("login");
  };

  return (
    <div className="sign-container">
      <div>
        <p className="sign-container__welcome">Welcome to</p>
        <h2 className="sign-container__header">Socially</h2>
      </div>
      <div className="sign-container__form-container">
        <form onSubmit={onFormSubmit} className="sign-container__form">
          <input
            type="text"
            value={userLogin}
            onChange={(event) => setUserLogin(event.target.value)}
            placeholder="Login"
          />
          <input
            type="password"
            value={userPassword}
            onChange={(event) => setUserPassword(event.target.value)}
            placeholder="Password"
          />
          <div className="add__button-border sign-container__button-border">
            {mode === "login" ? (
              <button
                type="submit"
                className="add__button sign-container__login-button"
              >
                Login
              </button>
            ) : (
              <button
                type="submit"
                className="add__button sign-container__register-button"
              >
                Register
              </button>
            )}
          </div>
        </form>
      </div>

      {mode === "login" ? (
        <button onClick={signupToggle} className="sign-container__toggle">
          Or sign up
        </button>
      ) : (
        <button onClick={loginToggle} className="sign-container__toggle">
          Or sign in
        </button>
      )}
    </div>
  );
};

export default SignIn;
