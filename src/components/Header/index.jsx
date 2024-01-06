import { useEffect, useState } from "react";
import Auth from "./auth";
import SignUp from "./Auth/SignUp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

function Header({ authUser, setAuthUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div>
      <div> Welcome to the business card creator! </div>
      {authUser ? (
        <Auth
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setAuthUser={setAuthUser}
        />
      ) : (
        <SignUp />
      )}
    </div>
  );
}

export default Header;
