import React from "react";
import { Wrapper } from "./MainPage.styled";
import Content from "./Content";
import Header from "./Header/Header";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};

export default MainPage;
