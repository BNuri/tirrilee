import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./Theme";
import Router from "./Router";
import UserProvider from "./Components/provider/UserProvider";
import ItemProvider from "./Components/provider/ItemProvider";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ItemProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </ItemProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
