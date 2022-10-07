import React from "react";
import { Outlet } from "react-router-dom";
const UniqueTeacherRequest = () => {
  return (
    <>
      <div>unikatowe zapytania do nauczyciela</div>
      <Outlet />
    </>
  );
};

export default UniqueTeacherRequest;
