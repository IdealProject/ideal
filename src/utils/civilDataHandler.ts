import { fields } from "@keystatic/core";
import { materiasCivil } from "./data/dataCivil";
import { semesterOptionsCE } from "./data/dataSemester";

export const civilDataHandler = fields.conditional(
  fields.select({
    label: "Semestre",
    description: "Select the semester",
    options: semesterOptionsCE,
    defaultValue: "5",
  }),
  {

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
