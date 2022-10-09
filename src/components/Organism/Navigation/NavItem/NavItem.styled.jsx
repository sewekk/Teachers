import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  font-size: 22px;
  font-weight: 700;
  color: #edf2f4;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: palevioletred;
  }

  &.active {
    color: palevioletred;
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;
