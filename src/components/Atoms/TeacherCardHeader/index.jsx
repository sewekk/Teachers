import React from "react";
import { PropTypes } from "prop-types";
import { Header } from "./index.styled";
import { ReactComponent as LockIcon } from "../../../assets/icons/lock.svg";

const TeacherCardHeader = ({ areas }) => {
  return (
    <Header>
      <LockIcon />
      {areas.map((area) => (
        <span key={area}>{area}</span>
      ))}
    </Header>
  );
};

TeacherCardHeader.propTypes = {
  areas: PropTypes.array.isRequired,
};

export default TeacherCardHeader;
