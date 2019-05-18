import styled, { css } from "styled-components";

export default styled.div`
  border: 1px solid transparent;
  padding: 0.5rem;

  ${p =>
    p.active &&
    css`
      background: ${p => p.theme.inverseText};
      border-color: ${p => p.theme.borderColor};
      box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
      display: inline;
    `}
`;
