import React from "react";
import { Formik } from "formik";
import Input from "../components/form/Input";
import { useRoomContext } from "../store/RoomContext";
import RoomsList from "../components/RoomsList";

function RoomView(props) {
  const [state, actions] = useRoomContext();
  function handleSubmit(values, { resetForm }) {
    actions.addRoom(values.name, values.tableSize);
    resetForm();
  }
  return (
    <div>
      <RoomsList />
      <Formik
        initialValues={{ name: "" }}
        onSubmit={handleSubmit}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <Input label="Add a room" name="name" type="text" />
            <Input label="Table size" name="tableSize" type="number" />
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default RoomView;
