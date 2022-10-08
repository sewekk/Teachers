import React from "react";
import { Nav, NavList } from "./Navigation.styled";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem to="/" title="Teachers" />
        <NavItem to="/teachers/add-teacher" title="Add teacher" />
        <NavItem to="/requests" title="Requests" />
      </NavList>
    </Nav>
  );
};

export default Navigation;
