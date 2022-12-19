import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";

import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default App;
