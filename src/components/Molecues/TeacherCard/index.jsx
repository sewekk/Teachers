import React from "react";
import { PropTypes } from "prop-types";
import { TeacherCard as Card } from "./index.styled";
import TeacherCardHeader from "../../Atoms/TeacherCardHeader/index";
import BaseLink from "../../Atoms/BaseLink/index";

const TeacherCard = ({
  teacherData: { firstName, lastName, description, areas, id },
}) => {
  return (
    <Card>
      <TeacherCardHeader areas={areas}></TeacherCardHeader>
      <div>
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      <p>{description}</p>
      <BaseLink
        destination={`/teachers/contact/${id}`}
        title={`Contact with coach ${firstName}`}
        primary={true}
      />
    </Card>
  );
};

TeacherCard.propTypes = {
  teacherData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    areas: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default TeacherCard;
