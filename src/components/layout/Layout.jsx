import React from "react";
import styled from "styled-components";

import ContentContainer from "./ContentContainer";
import Footer from "./Footer";
import Header from "./Header";

const SContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const SMain = styled.main`
  flex: 1;
`;

function Layout({ children }) {
  return (
    <SContainerDiv>
      <Header />
      <SMain>
        <ContentContainer>{children}</ContentContainer>
      </SMain>
      <Footer />
    </SContainerDiv>
  );
}

export default Layout;
