import React, { useState } from "react";
import { auth, db } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Auth from "./SignIn";
import { collection, addDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { addUserId } from "../../../reduxStore/userSlice";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(async () => {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            email: email,
            password: password,
          });
          console.log("Document written with ID: ", docRef.id);
          dispatch({ type: addUserId, payload: docRef.id });
          alert("account created! please proceed to log in page");
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      });
  };
  return (
    <div>
      <form name="signUp" onSubmit={SignUp}>
        <h1> Create Account </h1>
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
        <button type="submit"> Sign Up </button>
      </form>
      <h5> Already signed up? </h5>
      <Link to={"/logIn"} element={<Auth />}>
        Log into account
      </Link>
    </div>
  );
}
