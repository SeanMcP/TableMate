import styled from "styled-components";

const Button = styled.button`
  border: 1px solid ${p => p.theme.borderColor};
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;

  &:hover {
    background: ${p => p.theme.primary};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.accent};
    outline: 2px solid transparent;
  }

  &:active {
    background: ${p => p.theme.accent};
  }

  &:active&:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.primary};
  }
`;

export default Button;
