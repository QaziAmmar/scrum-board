import React, { useState, useCallback, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import cloneDeep from "lodash/cloneDeep";


import List from "../List";

import { Container } from "./style";
import { TaskDetailContainer } from "../TaskDetail/style";
import TaskDetail from "../TaskDetail/TaskDetail";

export default function Board({ data, handleAddTask, swipCardFirebase, refreshTaskList }) {
  const [boardData, setBoardData] = useState(data);
  const [selectedCard, setSelectCard] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState(null);

  // Page Updater
  const [page, setPage] = useState(0);
  

  const handleDragEnd = useCallback(
    ({ source, destination }) => {
      if (
        !destination ||
        (destination.droppableId === source.droppableId &&
          destination.index === source.index)
      )
        return;

      const newData = cloneDeep(boardData);

      // Removes the card from source location
      const sourceCards = newData.find(
        (column) => column.id === source.droppableId
      ).cards;
      const [card] = sourceCards.splice(source.index, 1);

      // Adds the card to it's new location
      const destinationCards = newData.find(
        (column) => column.id === destination.droppableId
      ).cards;
      destinationCards.splice(destination.index, 0, card);

      setBoardData(newData);
      if (source.droppableId !== destination.droppableId) {
        swipCardFirebase(source.droppableId, destination.droppableId, card);
      }

    },
    [boardData]
  );



  const handleCardClick = (e, card, columnId) => {
    
    setSelectedColumn(columnId);
    setSelectCard(card);
    setPage(page + 1);
    
  }



  useEffect(() => {
    // action on update of movies
    // console.log(selectedCard);
    // console.log(selectedColumn);
    
}, []);

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        {boardData.map((list) => (
          <List key={list.title} column={list} handleAddTask={handleAddTask} handleCardClick={handleCardClick} refreshTaskList={refreshTaskList} />
        ))}
      </DragDropContext>
      <> {(page !== 0) && <TaskDetail key={selectedCard.id} card={selectedCard} columnId={selectedColumn}  refreshTaskList={refreshTaskList} />}</>

    </Container>
  );
}
