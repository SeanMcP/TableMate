import React from "react";
import styled from "styled-components";

const SDiv = styled.div`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;

  @media screen and (max-width: calc(960px + 2rem)) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: initial;
  }
`;

function ContentContainer(props) {
  return <SDiv {...props} />;
}

export default ContentContainer;
