import React from "react";
import { useDroppable } from "@dnd-kit/core";
import styled from "styled-components";

const CardDropContainer = styled.div`
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
    <CardDropContainer ref={setNodeRef} style={style}>
      {props.children}
      <div>Card Drop</div>
    </CardDropContainer>
  );
}
