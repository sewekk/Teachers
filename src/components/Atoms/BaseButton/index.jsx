import React from "react";
import { StyledButton } from "./index.styled";
import { PropTypes } from "prop-types";

const BaseButton = ({ title, primary = true, type = "button" }) => (
  <StyledButton primary={primary} type={type} title={title}>
    {title}
  </StyledButton>
);

BaseButton.propTypes = {
  primary: PropTypes.boolean,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default BaseButton;
