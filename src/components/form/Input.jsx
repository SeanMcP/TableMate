import React from "react";
import { useField } from "formik";

function Input({ label, ...props }) {
  const [field, meta] = useField(props.name);
  const isError = meta.touched && meta.error;
  const errorId = props.name + "-error";
  return (
    <>
      <label>
        <span>{label}</span>
        <input
          {...field}
          {...props}
          aria-describedby={isError ? errorId : null}
        />
      </label>
      {isError && <div id={props.name + "-error"}>{meta.error}</div>}
    </>
  );
}

Input.defaultProps = {
  placeholder: null
};

export default Input;
