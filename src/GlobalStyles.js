import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    html, body, #root, #app {
        height: 100%;
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
    input {
        -webkit-border-radius: 0;
        -webkit-appearance: 0;
    }
    main {
        padding: 0 6pt;
        &.noPadding {
            padding: 0;
        }
        &.withHeaderBottomButton {
            margin-top: 22pt;
            margin-bottom: 24pt;
            height: calc(100% - 46pt);
        }
        &.withHeaderNav {
            margin-top: 25pt;
            margin-bottom: 30pt;
        }
    }
`;

export default GlobalStyle;
