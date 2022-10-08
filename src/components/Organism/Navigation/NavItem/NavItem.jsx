import React from "react";
import { StyledLink, ListItem } from "./NavItem.styled";

const NavItem = ({ to, title }) => {
  return (
    <ListItem>
      <StyledLink to={to} title={title} end>
        {title}
      </StyledLink>
    </ListItem>
  );
};

export default NavItem;
