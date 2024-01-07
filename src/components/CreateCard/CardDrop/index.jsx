import React from "react";
import { useDroppable, DndContext, closestCenter } from "@dnd-kit/core";
import styled from "styled-components";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

const CardDropContainer = styled(DndContext)`
  display: flex;
  flex-direction: row;
`;

export default function CardDrop(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <CardDropContainer
      ref={setNodeRef}
      collisionDetection={closestCenter}
      style={style}
    >
      {props.children}
      <div>Card Drop</div>
    </CardDropContainer>
  );
}
