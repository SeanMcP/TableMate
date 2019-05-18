import React from "react";
import { useField } from "formik";
import styled, { css } from "styled-components";

const SErrorTextDiv = styled.div`
  color: firebrick;
`;

const SInput = styled.input`
  border: 1px solid ${p => p.theme.borderColor};
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;

  &:focus {
    box-shadow: 0 0 0 2px ${p => p.theme.accent};
    outline: 4px solid transparent;
  }

  ${p =>
    p.flush &&
    css`
    border-${p.flush}: 0;
  `}
`;

function Input({ label, ...props }) {
  const [field, meta] = useField(props.name);
  const isError = meta.touched && meta.error;
  const errorId = props.name + "-error";
  return (
    <>
      <SInput
        {...field}
        {...props}
        placeholder={label}
        aria-label={label}
        aria-describedby={isError ? errorId : null}
      />
      {isError && <SErrorTextDiv id={errorId}>{meta.error}</SErrorTextDiv>}
    </>
  );
}

Input.defaultProps = {
  placeholder: null
};

export default Input;
