import React from "react";
import styled from "styled-components";

import ContentContainer from "./ContentContainer";

const SFooter = styled.footer`
  background: ${p => p.theme.text};
  border-top: ${p => p.theme.border};
  color: ${p => p.theme.inverseText};
  padding: 1rem 0;

  a {
    color: ${p => p.theme.inverseText};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const STextDiv = styled.div`
  text-align: center;
`;

function Footer() {
  return (
    <SFooter>
      <ContentContainer>
        <STextDiv>
          Made by <a href="https://github.com/seanmcp">SeanMcP</a>
        </STextDiv>
      </ContentContainer>
    </SFooter>
  );
}

export default Footer;
