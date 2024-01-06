import React, { useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

export default function Auth({ email, password, setEmail, setPassword }) {
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
  return (
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
      <h5> need to sign up? </h5>
      <Link to={"/signUp"} element={<SignUp />}>
        Sign Up
      </Link>
    </div>
  );
}
