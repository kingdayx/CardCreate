import { useEffect, useState } from "react";
import Auth from "./Auth/SignIn.jsx";
import SignUp from "./Auth/SignUp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

function Header({ authUser, setAuthUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email", email);
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

      <Auth
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        setAuthUser={setAuthUser}
      />
    </div>
  );
}

export default Header;
