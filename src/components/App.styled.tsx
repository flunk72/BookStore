import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: sans-serif;

  /* &::-webkit-scrollbar {
    width: 6px;
    background-color: #fff;
    border: 1px solid #eee;

    &-thumb {
      background: #c9d2e2; 
    }
  } */

body {
  margin: 0
}
}`;
