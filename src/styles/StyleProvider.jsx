import React from "react";
import { ThemeProvider } from "styled-components";
import THEME from "./theme";
import GlobalStyles from "./GlobalStyles";

export default ({ children }) => (
  <ThemeProvider theme={THEME}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);
