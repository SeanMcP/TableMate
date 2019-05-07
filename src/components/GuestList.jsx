import React from "react";
import { useGuestContext } from "../store/GuestContext";

function GuestList(props) {
  const [ state, actions ] = useGuestContext();
  function renderGuests({ byName }) {
    const output = [];
    for (const name in byName) {
      output.push(
        <li key={name}>
          {name}{" "}
          <button onClick={() => actions.removeGuest(name)}>
            Delete
          </button>{" "}
        </li>
      );
    }
    return output;
  }
  return (
    <div>
      <code>{JSON.stringify(state)}</code>
      <ul>{renderGuests(state)}</ul>
      <button onClick={() => actions.addGuest('Sean')}>
        Add me
      </button>
    </div>
  );
}

export default GuestList;
