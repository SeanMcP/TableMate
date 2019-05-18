import React from "react";
import ReactTable from "react-table";
import styled from "styled-components";
import { useStore } from "../store/StoreContext";

import "react-table/react-table.css";

const STableContainerDiv = styled.div`
  margin: 1rem 0;
`;

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
    <STableContainerDiv>
      <ReactTable
        className="-striped -highlight"
        columns={[
          { Header: "Name", accessor: "name" },
          { Header: "Room", accessor: "room" }
        ]}
        data={formatData(state)}
        defaultPageSize={10}
        defaultSorted={[
          {
            id: "name",
            desc: false
          }
        ]}
      />
    </STableContainerDiv>
  );
}

export default GuestList;
