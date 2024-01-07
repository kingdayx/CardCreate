import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../../firebase";
import { collection } from "firebase/firestore";

export default function CreateProject() {
  const [projectName, setName] = useState("");
  const usersRef = collection(db, "users");
  const navigate = useNavigate();
  console.log("collection of users", usersRef);

  const createProject = (e) => {
    e.preventDefault();
    console.log("project created", projectName);
    db.ref("/users").on("value", (snapshot) => {
      console.log("the snapshot", snapshot.val());
    });
    navigate(`/create/:${projectName}`, { relative: "path" });
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
    </div>
  );
}
