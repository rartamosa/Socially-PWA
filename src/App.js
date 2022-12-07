import React from "react";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router";

import Sign from "./pages/Sign";
import Main from "./pages/Main";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Main />} />
      <Route path="/signin" element={<Sign />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
};

export default App;
