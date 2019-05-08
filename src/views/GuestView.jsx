import React from "react";
import GuestList from "../components/GuestList";

function GuestView(props) {
  return (
    <div>
      <code>{JSON.stringify(props)}</code>
      <GuestList />
    </div>
  );
}

export default GuestView;
