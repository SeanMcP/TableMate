import React from "react";
import { Formik } from "formik";
import GuestList from "../components/GuestList";
import Input from "../components/form/Input";
import { useGuestContext } from "../store/GuestContext";

function GuestView(props) {
  // eslint-disable-next-line
  const [_, actions] = useGuestContext();
  function handleSubmit(values, { resetForm }) {
    actions.addGuest(values.name);
    resetForm();
  }
  return (
    <div>
      <GuestList />
      <Formik
        initialValues={{ name: "" }}
        onSubmit={handleSubmit}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input name="name" type="text" />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default GuestView;
