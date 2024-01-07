import CardDrop from "./CardDrop";
import Menu from "./Menu";
import styled from "styled-components";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";

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

function CreateCard({ setAuthUser, authUser }) {
  const userSignOut = () => {
    console.log(authUser);
    signOut(auth)
      .then(() => {
        console.log(auth);
        setAuthUser(null);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <CreateCardContainer>
      <CreateCardNav>
        navigation <button onClick={userSignOut}>sign out</button>
      </CreateCardNav>
      <CreateCardCreator>
        <Menu />
        <CardDrop />
      </CreateCardCreator>
    </CreateCardContainer>
  );
}

export default CreateCard;
