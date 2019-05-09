import React from "react";
import { useGuestContext } from "../store/GuestContext";

function GuestList(props) {
  const [state, actions] = useGuestContext();
  function renderGuests({ byName }) {
    const output = [];
    for (const name in byName) {
      output.push(
        <li key={name}>
          {name}{" "}
          <button onClick={() => actions.removeGuest(name)}>Delete</button>
        </li>
      );
    }
    return output;
  }
  return <ul>{renderGuests(state)}</ul>;
}

export default GuestList;
