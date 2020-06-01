import React from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import Router from "./Router";

const App = styled.div``;

export default () => (
  <App>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </App>
);
