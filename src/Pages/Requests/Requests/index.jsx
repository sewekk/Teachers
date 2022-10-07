import React from "react";
import NavItem from "../../../components/Organism/Navigation/NavItem/NavItem";

const Requests = () => {
  return (
    <>
      <NavItem to="/requests/1/2" title="go to 1/2" />
      <NavItem to="/requests/1" title="go to 1" />
    </>
  );
};

export default Requests;
