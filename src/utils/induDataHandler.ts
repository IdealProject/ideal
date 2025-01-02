import { fields } from "@keystatic/core";
import { materiasIndu } from "./data/dataIndu";
import { semesterOptions } from "./data/dataSemester";

export const induDataHandler = fields.conditional(
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
      options: materiasIndu[1],
      defaultValue: "F1",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[2],
      defaultValue: "ALN",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[3],
      defaultValue: "AM2",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[4],
      defaultValue: "AM3",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[5],
      defaultValue: "MR2",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[6],
      defaultValue: "GC",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[7],
      defaultValue: "IE",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[8],
      defaultValue: "PI1",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[9],
      defaultValue: "CI",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasIndu[10],
      defaultValue: "IM",
    }),
  },
);
