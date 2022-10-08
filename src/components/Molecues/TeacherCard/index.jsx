import React from "react";
import { PropTypes } from "prop-types";
import { TeacherCard as Card } from "./index.styled";
import TeacherCardHeader from "../../Atoms/TeacherCardHeader/index";

const TeacherCard = ({
  teacherData: { firstName, lastName, description, areas },
}) => {
  return (
    <Card>
      <TeacherCardHeader areas={areas}></TeacherCardHeader>
      <h3>
        {firstName}
        {lastName}
      </h3>
      <p>{description}</p>
      <button>Contact Teacher</button>
    </Card>
  );
};

TeacherCard.propTypes = {
  teacherData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    areas: PropTypes.array.isRequired,
  }),
};

export default TeacherCard;
