import React from "react";
import { Formik } from "formik";

import { useStore } from "../store/StoreContext";

import GuestList from "../components/GuestList";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import View from "../components/layout/View";

function GuestView(props) {
  const [, actions] = useStore();
  function handleSubmit(values, { resetForm }) {
    if (values.name) {
      actions.addNewGuest(values.name);
      resetForm();
    }
  }
  return (
    <View
      title="Guests"
      description="Add guests and view their seating assignment."
    >
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
    </View>
  );
}

export default GuestView;
