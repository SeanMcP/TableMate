import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useStore } from "../store/StoreContext";

import DropZone from "../components/seating/DropZone";
import Guest from "../components/seating/Guest";
import Group from "../components/seating/Group";
import View from "../components/layout/View";

function SeatingView(props) {
  const [state, actions] = useStore();
  const { guestsByRoom } = state;
  const onDragEnd = result => {
    const { source, destination } = result;

    if (!destination) {
      // dropped outside the list
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
    <View title="Seating" description="View and rearrange the seating chart.">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.keys(guestsByRoom).map(room => {
          const guests = guestsByRoom[room];
          return (
            <Group key={room} title={room}>
              <Droppable droppableId={room}>
                {(provided, snapshot) => (
                  <DropZone
                    active={snapshot.isDraggingOver}
                    ref={provided.innerRef}
                  >
                    {guests.map((guest, index) => (
                      <Draggable key={guest} draggableId={guest} index={index}>
                        {(provided, snapshot) => (
                          <Guest
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            active={snapshot.isDragging}
                          >
                            {guest}
                          </Guest>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </DropZone>
                )}
              </Droppable>
            </Group>
          );
        })}
      </DragDropContext>
    </View>
  );
}

export default SeatingView;
