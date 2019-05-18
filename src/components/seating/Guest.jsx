import styled, { css } from "styled-components";

export default styled.div`
  padding: 0.25rem;

  ${p =>
    p.active &&
    css`
      background: ${p => p.theme.inverseText};
      box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
      display: inline;
    `}
`;
