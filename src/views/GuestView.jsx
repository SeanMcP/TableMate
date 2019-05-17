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
    <>
      <h1>Guests</h1>
      <p>Add guests and view their seating assignment.</p>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={handleSubmit}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input label="Guest name" name="name" type="text" />
            <button type="submit">Add guest</button>
          </form>
        )}
      />
      <GuestList />
    </>
  );
}

export default GuestView;
