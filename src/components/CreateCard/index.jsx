import CardDrop from "./CardDrop";
import Menu from "./Menu";
import styled from "styled-components";

const CreateCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CreateCardCreator = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const CreateCardNav = styled.div`
  display: flex;
  flex-direction: row;
`;

function CreateCard() {
  return (
    <CreateCardContainer>
      <CreateCardNav>navigation</CreateCardNav>
      <CreateCardCreator>
        <Menu />
        <CardDrop />
      </CreateCardCreator>
    </CreateCardContainer>
  );
}

export default CreateCard;
