import React from "react";

import ContentContainer from "./ContentContainer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
}

export default Layout;
