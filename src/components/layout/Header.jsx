import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import ContentContainer from "./ContentContainer";

const SHeader = styled.header`
  background: dodgerblue;
  padding: 1rem 0;
`;

const SDiv = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const SNav = styled.nav`
  a + a {
    margin-left: 1rem;
  }
`;

const SLink = styled(Link)`
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: white;
  padding: 0.25rem 0.5rem;
  margin: 0 calc((0.25rem + 1px) * -1);
  text-decoration: none;

  &:hover,
  &:focus {
    border-color: white;
    outline: none;
  }

  &:active {
    border-color: rgba(0, 0, 0, 0.25);
  }
`;

function Header(props) {
  return (
    <SHeader {...props}>
      <ContentContainer>
        <SDiv>
          <SLink to="/">TableMate</SLink>
          <SNav>
            <SLink to="/guests">Guests</SLink>
            <SLink to="/seating">Seating</SLink>
          </SNav>
        </SDiv>
      </ContentContainer>
    </SHeader>
  );
}

export default Header;
