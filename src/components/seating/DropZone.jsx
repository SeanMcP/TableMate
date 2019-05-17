import styled, { css } from "styled-components";

export default styled.div`
  background: rgba(0, 0, 0, 0.05);
  min-height: 1rem;
  padding: 0.5rem;

  ${p =>
    p.active &&
    css`
      background: rgba(30, 144, 255, 0.25);
      box-shadow: inset 0 0 0.25rem rgba(0, 0, 0, 0.25);
    `}
`;
