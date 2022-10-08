import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";

//teachers
import Teachers from "./Teachers/Teachers/index.jsx";
import AddTeacher from "./Teachers/AddTeacher/index.jsx";

//requests
import Requests from "./Requests/Requests/index.jsx";
import UniqueTeacherRequests from "./Requests/UniqueTeacherRequests/index.jsx";
import Request from "./Requests/Request/index.jsx";

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
