import React from "react";
import { PropTypes } from "prop-types";
import { StyledLink } from "./index.styled";

const BaseLink = ({ primary = true, destination, title }) => (
  <StyledLink primary={primary} to={destination} title={title}>
    {title}
  </StyledLink>
);

BaseLink.propTypes = {
  primary: PropTypes.boolean,
  destination: PropTypes.string,
  title: PropTypes.string,
};

export default BaseLink;
