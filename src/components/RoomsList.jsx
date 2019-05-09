import React from "react";
import { Link } from "@reach/router";
import titleCase from "title-case";
import { useRoomContext } from "../store/RoomContext";

function RoomsList(props) {
  const [state] = useRoomContext();

  function renderRoomLinks(byName) {
    const output = [];
    for (const name in byName) {
      output.push(
        <Link key={name} to={`/room/${name}`}>
          {titleCase(name)}
        </Link>
      );
    }
    return output;
  }

  return <nav>{renderRoomLinks(state.byName)}</nav>;
}

export default RoomsList;
