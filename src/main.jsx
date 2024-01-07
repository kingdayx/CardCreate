import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import CreateCard from "./components/CreateCard/index.jsx";
import { DndContext } from "@dnd-kit/core";
import SignUp from "./components/Header/Auth/SignUp.jsx";
import Auth from "./components/Header/Auth/SignIn.jsx";
import { store } from "./reduxStore/reduxStore.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create/:projectName",
    element: <CreateCard />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/logIn",
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndContext>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </DndContext>
  </React.StrictMode>
);
