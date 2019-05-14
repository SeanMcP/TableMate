import React from "react";
import { Formik } from "formik";
import GuestList from "../components/GuestList";
import Input from "../components/form/Input";
import { useStore } from "../store/StoreContext";

function GuestView(props) {
  const [, actions] = useStore();
  function handleSubmit(values, { resetForm }) {
    actions.addNewGuest(values.name);
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
