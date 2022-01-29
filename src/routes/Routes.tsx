import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};
