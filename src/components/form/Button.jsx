import styled from "styled-components";

const Button = styled.button`
  border: ${p => p.theme.border};
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;

  &:hover {
    background: ${p => p.theme.accentDark};
    color: ${p => p.theme.inverseText};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.accent};
    outline: 2px solid transparent;
  }

  &:active {
    background: ${p => p.theme.tertiary};
    color: inherit;
  }

  &:active&:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.accent};
  }
`;

export default Button;
