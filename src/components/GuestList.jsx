import React from "react";
import ReactTable from "react-table";
import { useStore } from "../store/StoreContext";

import "react-table/react-table.css";

function GuestList(props) {
  const [state] = useStore();
  function formatData({ guestsByRoom }) {
    const output = [];
    for (const room in guestsByRoom) {
      guestsByRoom[room].forEach(guest => {
        output.push({
          name: guest,
          room: room === "NONE" ? undefined : room
        });
      });
    }
    return output;
  }
  return (
    <ReactTable
      className="-striped -highlight"
      columns={[
        { Header: "Name", accessor: "name" },
        { Header: "Room", accessor: "room" }
      ]}
      data={formatData(state)}
      defaultSorted={[
        {
          id: "name",
          desc: false
        }
      ]}
    />
  );
}

export default GuestList;
