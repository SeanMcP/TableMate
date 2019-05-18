import styled, { css } from "styled-components";

export default styled.div`
  background: rgba(0, 0, 0, 0.03);
  border: ${p => p.theme.border};
  min-height: 1rem;
  padding: 0.5rem;
  transition: all 200ms ease-in-out;

  ${p =>
    p.active &&
    css`
      background: ${p.theme.accent};
      box-shadow: inset 0 0 0.25rem rgba(0, 0, 0, 0.25);
    `}
`;
