import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import CreateCard from "../../CreateCard";
import Header from "..";
import App from "../../../App";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(null);
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userSignOut = () => {
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
    <div>
      {authUser ? (
        <App />
      ) : (
        <div>
          <form name="signIn" onSubmit={SignIn}>
            <h1> Log In to your Account </h1>
            <input
              input="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              input="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit"> Log In </button>
          </form>
          <h5> Already have an account? </h5>
          <Link to={"/signUp"} element={<SignUp />}>
            Sign Up
          </Link>

          <Link to={"/"} element={<Header />}>
            <h5>Back to homepage</h5>
          </Link>
        </div>
      )}
    </div>
  );
}
