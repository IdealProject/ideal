import { fields } from "@keystatic/core";
import { materiasCivil } from "./data/dataCivil";
import { semesterOptions } from "./data/dataSemester";

export const civilDataHanlder = fields.conditional(
  fields.select({
    label: "Semestre",
    description: "Select the semester",
    options: semesterOptions,
    defaultValue: "1",
  }),
  {
    1: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[1],
      defaultValue: "F1",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[2],
      defaultValue: "F2",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[3],
      defaultValue: "DT1",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[4],
      defaultValue: "DT2",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[5],
      defaultValue: "EIE",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[6],
      defaultValue: "CE",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[7],
      defaultValue: "EMT",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[8],
      defaultValue: "CAE",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[9],
      defaultValue: "CAEM",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasCivil[10],
      defaultValue: "LEG",
    }),
  },
);
