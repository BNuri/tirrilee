import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
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
    main {
        padding: 0 6pt;
        &.no_padding {
            padding: 0;
        }
    }
`;

export default GlobalStyle;
