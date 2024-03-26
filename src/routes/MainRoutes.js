import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "../components/Basket/Basket";
import Home from "../components/Home/Home";
import Сertificate from "../components/certificate/Сertificate";
import Category from "../components/cateory/Category";
import DetailCard from "../components/detailCard/DetailCard";

const MainRoutes = () => {
  const PUBLIC = [
    { path: "/", element: <Home /> },
    { path: "/basket", element: <Basket /> },
    { path: "/certificate", element: <Сertificate /> },
    { path: "/category", element: <Category /> },
    { path: "/product/:id", element: <DetailCard /> },
  ];

  return (
    <Routes>
      {PUBLIC.map((el, index) => (
        <Route path={el.path} element={el.element} key={index} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
