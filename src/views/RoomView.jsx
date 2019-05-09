import React from "react";
import titleCase from "title-case";
import { useRoomContext } from "../store/RoomContext";
import TablesByRoom from "../components/TablesByRoom";

function RoomView(props) {
  const [state, actions] = useRoomContext();
  const roomData = state.byName[props.name];
  return (
    <div>
      <h1>{titleCase(props.name)}</h1>
      <h2>Tables ({roomData.tables.length})</h2>
      <TablesByRoom name={props.name} />
      <button onClick={actions.addTable}>Add table</button>
    </div>
  );
}

export default RoomView;
