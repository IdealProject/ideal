import { fields } from "@keystatic/core";
import { materiasCBI } from "./data/dataCBI";
import { semesterOptionsCBI } from "./data/dataSemester";

export const cbiDataHandler = fields.conditional(
  fields.select({
    label: "Semestre",
    description: "Select the semester",
    options: semesterOptionsCBI,
    defaultValue: "1",
  }),
  {
    1: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiasCBI[1],
        defaultValue: "F1",
      }),
      2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiasCBI[2],
        defaultValue: "F2",
      }),
      3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiasCBI[3],
        defaultValue: "DT1",
      }),
      4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiasCBI[4],
        defaultValue: "DT2",
      }),
  },
);
