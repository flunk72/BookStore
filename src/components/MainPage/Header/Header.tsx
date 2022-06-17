import React from "react";
import { HeaderWrapper, Logo, Store, Tabs, Button } from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Store>Книжный магазин</Store>
      <Tabs>
        <Button key={1} to="books">
          Книги
        </Button>
        <Button key={2} to="favorites">
          Избранное
        </Button>
        <Button key={3} to="basket">
          Корзина
        </Button>
      </Tabs>
    </HeaderWrapper>
  );
};

export default Header;
