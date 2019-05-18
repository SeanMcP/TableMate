import React from "react";
import { Formik } from "formik";

import { useStore } from "../store/StoreContext";

import ContentContainer from "../components/layout/ContentContainer";
import GuestList from "../components/GuestList";
import Button from "../components/form/Button";
import Input from "../components/form/Input";

function GuestView(props) {
  const [, actions] = useStore();
  function handleSubmit(values, { resetForm }) {
    if (values.name) {
      actions.addNewGuest(values.name);
      resetForm();
    }
  }
  return (
    <ContentContainer>
      <h1>Guests</h1>
      <p>Add guests and view their seating assignment.</p>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={handleSubmit}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input label="Guest name" name="name" type="text" flush="right" />
            <Button type="submit">Add guest</Button>
          </form>
        )}
      />
      <GuestList />
    </ContentContainer>
  );
}

export default GuestView;
