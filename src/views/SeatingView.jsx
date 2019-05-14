import React from "react";
import { useGuestContext } from "../store/GuestContext";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function SeatingView(props) {
  const [data] = useGuestContext();
  const guestsByRoom = sortGuestsByRoom(data.byName);
  const onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      //   const items = reorder(
      //     this.getList(source.droppableId),
      //     source.index,
      //     destination.index
      //   );
      //   let state = { items };
      //   if (source.droppableId === "droppable2") {
      //     state = { selected: items };
      //   }
      //   this.setState(state);
    } else {
      //   const result = move(
      //     this.getList(source.droppableId),
      //     this.getList(destination.droppableId),
      //     source,
      //     destination
      //   );
      //   this.setState({
      //     items: result.droppable,
      //     selected: result.droppable2
      //   });
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(guestsByRoom).map(room => {
          const guests = guestsByRoom[room];
          return (
            <Droppable droppableId={room} key={room}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  // style={getListStyle(snapshot.isDraggingOver)}
                >
                  <h2>{room}</h2>
                  {guests.map((guest, index) => (
                    <Draggable key={guest} draggableId={guest} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          // style={getItemStyle(
                          //   snapshot.isDragging,
                          //   provided.draggableProps.style
                          // )}
                        >
                          {guest}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}

function sortGuestsByRoom(guestsByName) {
  const sorted = {};
  for (const name in guestsByName) {
    const { room } = guestsByName[name];
    if (!sorted.hasOwnProperty(room)) {
      sorted[room] = [];
    }
    sorted[room].push(name);
  }
  return sorted;
}

export default SeatingView;
