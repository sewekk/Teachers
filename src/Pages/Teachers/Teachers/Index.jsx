import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherCard from "../../../components/Molecues/TeacherCard/index";
import { BASE_URL } from "../../../config/api.config";
import { TeachersList } from "./index.styled";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const GetTeachers = async () => {
      const response = await axios.get(`${BASE_URL}/coaches.json`);
      const teachers = response.data;

      for (const teacher in teachers) {
        teachers[teacher].id = teacher;
      }

      setTeachers(Object.values(teachers));
    };

    GetTeachers();
  }, []);

  return (
    <TeachersList>
      {teachers.map((teacher) => (
        <TeacherCard key={teacher.id} teacherData={teacher}></TeacherCard>
      ))}
    </TeachersList>
  );
};

export default Teachers;
