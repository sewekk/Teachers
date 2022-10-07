import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";

//teachers
import Teachers from "./Teachers/Teachers/Index";
import AddTeacher from "./Teachers/AddTeacher/index";

//requests
import Requests from "./Requests/Requests/index";
import UniqueTeacherRequests from "./Requests/UniqueTeacherRequests/index";
import Request from "./Requests/Request/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Teachers />,
      },
      {
        path: "/teachers/add-teacher",
        element: <AddTeacher />,
      },
      {
        path: "/requests",
        element: <Requests />,
      },
      {
        path: "/requests/:teacherID",
        element: <UniqueTeacherRequests />,
        children: [
          {
            path: "/requests/:teacherID/:requestID",
            element: <Request />,
          },
        ],
      },
    ],
  },
]);

export default router;