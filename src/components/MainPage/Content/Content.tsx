import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Basket from "./Basket";
import Books from "./Books";
import { ContentWrapper } from "./Content.styled";
import Favorites from "./Favorites";

const Content = () => {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="books" element={<Books />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="basket" element={<Basket />} />
        <Route path="" element={<Navigate replace to="books" />} />
      </Routes>
    </ContentWrapper>
  );
};

export default Content;
