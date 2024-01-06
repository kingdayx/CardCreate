import { useEffect, useState } from "react";
import Header from "./components/Header";
import CreateCard from "./components/CreateCard";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    console.log("auth change", authUser);
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(auth);
        setAuthUser(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {authUser ? (
        <Header authUser={authUser} setAuthUser={setAuthUser} />
      ) : (
        <CreateCard userSignOut={userSignOut} />
      )}
    </>
  );
}

export default App;
