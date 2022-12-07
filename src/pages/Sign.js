import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import user from "../reducers/user";

const SignIn = () => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [mode, setMode] = useState("login");
  const storedLogin = useSelector((store) => store.user.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (storedLogin) {
      navigate("/");
    }
  }, [storedLogin]);

  const onFormSubmit = () => {
    const submittedLogin = userLogin;
    dispatch(user.actions.logIn(submittedLogin));
    navigate("/");
  };

  const signupToggle = () => {
    setMode("signup");
  };

  const loginToggle = () => {
    setMode("login");
  };

  return (
    <div>
      <p>Welcome to</p>
      <h2>Socially</h2>
      <div>
        <form onSubmit={onFormSubmit}>
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
          {mode === "login" ? (
            <button type="submit">Login</button>
          ) : (
            <button type="submit">Register</button>
          )}
        </form>
        {mode === "login" ? (
          <button onClick={signupToggle}>Or sign up</button>
        ) : (
          <button onClick={loginToggle}>Or sign in</button>
        )}
      </div>
    </div>
  );
};

export default SignIn;
