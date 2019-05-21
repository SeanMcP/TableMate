import React from "react";
import ReactTable from "react-table";
import styled from "styled-components";
import "react-table/react-table.css";

import { useStore } from "../store/StoreContext";
import Button from "./form/Button";

const STableContainerDiv = styled.div`
  margin: 1rem 0;
`;

const SAlignRight = styled.div`
  text-align: right;
`;

function GuestList(props) {
  const [state, { removeGuest }] = useStore();
  function formatData({ guestsByRoom }) {
    const output = [];
    for (const room in guestsByRoom) {
      guestsByRoom[room].forEach(guest => {
        output.push({
          name: guest,
          room: room === "NONE" ? undefined : room,
          delete: (
            <Button small onClick={() => removeGuest(guest, room)}>
              Delete
            </Button>
          )
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
          { Header: "Room", accessor: "room" },
          {
            Header: "Actions",
            accessor: "delete",
            Cell: ({ value }) => <SAlignRight>{value}</SAlignRight>,
            width: 100
          }
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
