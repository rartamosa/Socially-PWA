import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { userLogin } from "../reducers/user";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("signin");

  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(login, password, mode));
  };

  const signupToggle = () => {
    setMode("signup");
  };

  const loginToggle = () => {
    setMode("signin");
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
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            placeholder="Login"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
          <div className="add__button-border sign-container__button-border">
            {mode === "signin" ? (
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

      {mode === "signin" ? (
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
