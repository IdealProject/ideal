import { fields } from "@keystatic/core";
import { materiasInfor } from "./data/dataInfor";
import { semesterOptions } from "./data/dataSemester";
export const inforDataHanlder = fields.conditional(
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
      options: materiasInfor[1],
      defaultValue: "F1",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[2],
      defaultValue: "F2",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[3],
      defaultValue: "A3",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[4],
      defaultValue: "PyE",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[5],
      defaultValue: "Te",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[6],
      defaultValue: "Sg",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[7],
      defaultValue: "Is1",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[8],
      defaultValue: "Is2",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[9],
      defaultValue: "Au",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasInfor[10],
      defaultValue: "Gc",
    }),
  },
);
