import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const [projectName, setName] = useState("");

  const createProject = (e) => {
    e.preventDefault();
    console.log("project created", projectName);
    const navigate = useNavigate();
    navigate("/create");
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
