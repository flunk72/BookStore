import styled from "styled-components";
import * as router from "react-router-dom";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ecc8b8;
  padding: 20px;
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background-image: url("/books_icon.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Store = styled.h3`
  color: #113d6a;
  letter-spacing: 3px;
`;

export const Tabs = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(router.NavLink)`
  width: 120px;
  height: 30px;
  font-size: 16px;
  fonr-weight: 400;
  background: #ece1db;
  border: 2px solid #113d6a;
  border-radius: 20px;
  text-decoration: none;
  color: #113d6a;
  text-align: center;
  line-height: 26px;

  &:hover {
    cursor: pointer;
    background: #113d6a;
    color: #ffffff;
  }
`;
