import React from "react";
import { Nav, NavList } from "./Navigation.styled";
import NavItem from "./NavItem/NavItem";

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem to="/teachers" title="Teachers" />
        <NavItem to="/requests" title="Requests" />
      </NavList>
    </Nav>
  );
};

export default Navigation;
