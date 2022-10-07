import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import router from "./pages/routes";
import { RouterProvider } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
