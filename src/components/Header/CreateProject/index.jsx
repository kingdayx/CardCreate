import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../../firebase";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";

export default function CreateProject({ setAuthUser }) {
  const [projectName, setName] = useState("");
  const [tKey, setTKey] = useState("");
  const usersRef = collection(db, "users");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTKey = async () => {
      try {
        const user = auth.currentUser;

        if (user) {
          // Get the UID of the logged-in user
          const currentUserId = user.uid;

          // Query the users collection based on the UID
          const userDocRef = doc(usersRef, currentUserId);
          console.log("user doc", userDocRef);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            console.log(currentUserId);
            setTKey(currentUserId); // Use the UID as tKey
          }
        }
      } catch (error) {
        console.error("Error fetching tKey:", error);
      }
    };

    fetchTKey();
  }, [usersRef]);

  const createProject = async (e) => {
    e.preventDefault();

    // Create a new document under the "users" collection with an automatically generated ID
    const newDocRef = doc(usersRef, tKey, "projects"); // Adjust 'projects' to your subcollection name

    try {
      // Set data for the new document
      await setDoc(newDocRef, { projectName });

      // Fetch the newly created document (optional)
      const newDocSnap = await getDoc(newDocRef);
      if (newDocSnap.exists()) {
        console.log("New Document data:", newDocSnap.data());
      }

      navigate(`/create/${tKey}`, { relative: "path" });
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(auth);
        setAuthUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h5> Create Project </h5>
      <form name="projectCreation" onSubmit={createProject}>
        <input
          type="name"
          placeholder="enter your project name"
          value={projectName}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit"> create your project </button>
      </form>
      <h5> Want to sign out? </h5>
      <button onClick={userSignOut}> Sign out </button>
    </div>
  );
}
