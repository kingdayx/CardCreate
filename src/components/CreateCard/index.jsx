import CardDrop from "./CardDrop";
import Menu from "./Menu";
import styled from "styled-components";

const CreateCardContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function CreateCard() {
  return (
    <CreateCardContainer>
      <Menu />
      <CardDrop />
    </CreateCardContainer>
  );
}

export default CreateCard;
