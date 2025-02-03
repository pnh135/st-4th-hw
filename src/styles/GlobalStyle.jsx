import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        text-align: center;
    }

    active {
        color: blue;
    }
`
 
export default GlobalStyle;