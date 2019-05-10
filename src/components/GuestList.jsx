import React from "react";
import ReactTable from "react-table";
import { useGuestContext } from "../store/GuestContext";

import "react-table/react-table.css";

function GuestList(props) {
  const [state] = useGuestContext();
  function formatData({ byName }) {
    const output = [];
    for (const name in byName) {
      output.push({
        name,
        room: byName[name].room
      });
    }
    return output;
  }
  return (
    <ReactTable
      data={formatData(state)}
      columns={[
        { Header: "Name", accessor: "name" },
        { Header: "Room", accessor: "room" }
      ]}
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
