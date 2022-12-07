import React from "react";
import { Routes, Route } from "react-router";

import SignIn from "./components/SignIn";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
