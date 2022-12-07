import React from "react";
import { Routes, Route } from "react-router";

import Sign from "./pages/Sign";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/signin" element={<Sign />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default App;
