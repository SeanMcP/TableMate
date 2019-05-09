import React from "react";
import { useRoomContext } from "../store/RoomContext";

function TablesByRoom(props) {
  const [state] = useRoomContext();
  const { tables } = state.byName[props.name];

  function renderTables(tables) {
    const listItems = tables.map((table, index) => (
      <li key={index}>
        <h3>Table {index + 1}</h3>
        {renderGuests(table)}
      </li>
    ));

    return <ul>{listItems}</ul>;
  }

  function renderGuests(table) {
    const listItems = table.map(guest => <li key={guest}>{guest}</li>);
    return <ul>{listItems}</ul>;
  }

  return renderTables(tables);
}

export default TablesByRoom;
