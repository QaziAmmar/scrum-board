import React, { memo, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import dateFormat from 'dateformat';
import { Container, Header, Status, Content, Duration } from "./style";
import trash from "./trash.png";
import person from "./person.png";
import { db } from '../../firebase'
import { ref, remove } from 'firebase/database';


export default memo(function Card({ card, index, columnId, handleCardClick, refreshTaskList }) {


  const nodeRef = React.useRef(null);
  const mainUser =  ((card.assign_to === undefined) ?  "" : Object.values(card.assign_to)[0].name)

  const handleDelete = (e) => {

    remove(ref(db, `/Tasks/${columnId}/cards/${card.id}`));
    refreshTaskList();

  }

  useEffect(() => {
    
  }, [])


  return (
    <Draggable draggableId={card.id} index={index} nodeRef={nodeRef}  >
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          onClick={((e) => { handleCardClick(e, card, columnId) })}
        >
          <Header>

            {card.labels.map((label) => (
              <Status key={label} color={label} />
            ))}
          </Header>
          <Content>
            <h2 className="title">{card.title}</h2>
            {/* <p className="detail" >{card.content}</p> */}
            <div className="flex-row">
              <img className="person-icon" src={person} alt="" />
              <p className="user">{mainUser}</p>

            </div>

          </Content>

          <Duration>

            <div className="flex-row-full">

              <div className="flex-row">
                <div className="pipe"></div><div>
                  <p className="createAt">{dateFormat(card.createdAt, "mmmm dS, yyyy")}</p>
                  {card.dueAt === " " ? <p> --- </p> : <p className="dueAt">{dateFormat(card.dueAt, "mmmm dS, yyyy")}</p>}
                </div>
              </div>

              <button className="delete-button" onClick={e => { handleDelete(e) }} ><img className="trash-icon" src={trash} alt="" /></button>
            </div>
          </Duration>
        </Container>
      )}
    </Draggable>
  );
});
