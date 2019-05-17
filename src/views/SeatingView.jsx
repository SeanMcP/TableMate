import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStore } from "../store/StoreContext";

function SeatingView(props) {
  const [state, actions] = useStore();
  const { guestsByRoom } = state;
  const onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // Reorder at same table
      actions.reorderGuest(source.droppableId, source.index, destination.index);
    } else {
      // Move to new table
      actions.moveGuest(
        source.droppableId,
        source.index,
        destination.droppableId,
        destination.index
      );
    }
  };

  return (
    <>
      <h1>Seating</h1>
      <p>View and rearrange the seating chart.</p>
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
                  <h2>{room === "NONE" ? "To be seated" : room}</h2>
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
    </>
  );
}

export default SeatingView;
