import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Input } from "@mui/material";

import { PrimaryButton } from "../styled-components/Buttons";

import { userLogin } from "../reducers/user";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [mode, setMode] = useState("signin");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const accessToken = useSelector((store) => store.user.accessToken);
  const error = useSelector((store) => store.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
    if (accessToken && !error) {
      navigate("/");
    }
  }, [accessToken, error, navigate]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    if (login && password) {
      setLoading(true);
      dispatch(userLogin(login, password, mode));
    }
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
          <Input
            value={login}
            placeholder="Login"
            type="text"
            onChange={(event) => setLogin(event.target.value)}
          />
          {isFormSubmitted && !login && (
            <span className="sign-container__error">
              * You have to type your login
            </span>
          )}

          <Input
            value={password}
            placeholder="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {isFormSubmitted && !password && (
            <span className="sign-container__error">
              * You have to type your password
            </span>
          )}

          <PrimaryButton type="submit" sx={{ width: "20px" }}>
            {loading ? (
              <span className="sign-container__loader"></span>
            ) : (
              <span>{mode === "signin" ? "login" : "register"}</span>
            )}
          </PrimaryButton>
          {error && (
            <span className="sign-container__login-error">{error}</span>
          )}
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
