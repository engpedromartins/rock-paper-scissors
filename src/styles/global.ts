import { createGlobalStyle } from "styled-components";
import colors from "../common/style";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

  body{
    background-color: ${`white`};
    -webkit-font-smoothing: antialiased;
  }

  body,input, button {
    font-family: 'Roboto', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h5 strong{
    font-weight: 500;
    color: ${colors.gold};
  }

  button{
    cursor: pointer;
  }
}
`;
