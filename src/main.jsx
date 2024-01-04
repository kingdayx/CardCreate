import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CreateCard from "./components/CreateCard/index.jsx";
import { DndContext } from "@dnd-kit/core";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <CreateCard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndContext>
      <RouterProvider router={router} />
    </DndContext>
  </React.StrictMode>
);
