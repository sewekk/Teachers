import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherCard from "../../../components/Molecues/TeacherCard/index";
import { BASE_URL } from "../../../config/api.config";
import { ContentWrapper } from "../../../components/Molecues/ContentWrapper/index.styled";
import { TeachersList } from "./index.styled";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const GetTeachers = async () => {
      const response = await axios.get(`${BASE_URL}/coaches.json`);
      const teachers = response.data;

      setTeachers(Object.values(teachers));
    };

    GetTeachers();
  }, []);

  return (
    <ContentWrapper>
      {console.log(teachers)}
      <TeachersList>
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacherData={teacher}></TeacherCard>
        ))}
      </TeachersList>
    </ContentWrapper>
  );
};

export default Teachers;
