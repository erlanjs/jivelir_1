import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../components/Basket/Basket";
import Home from "../components/Home/Home";

const MainRoutes = () => {
  const PUBLIC = [
    { path: "/", element: <Home />, key: 1 },
    { path: "/basket", element: <Basket />, key: 2 },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.path} element={el.element} key={el.key} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
