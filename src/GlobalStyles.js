import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    a,
    a:hover,
    a:active{
        text-decoration: none;
        color: inherit;
    }
    input, button, textarea { 
        &:focus, &:active { 
            outline: none; 
        } 
    }
`;

export default GlobalStyle;
