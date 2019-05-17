import React from "react";
import styled from "styled-components";

const SDiv = styled.div`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 1rem;

  h2 {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  + div {
    margin-top: 1rem;
  }
`;

function Group({ children, title, ...props }) {
  return (
    <SDiv {...props}>
      <h2>{title === "NONE" ? "To be seated" : title}</h2>
      {children}
    </SDiv>
  );
}

export default Group;
