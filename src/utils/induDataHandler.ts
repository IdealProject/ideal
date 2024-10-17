import { fields } from "@keystatic/core";
import { materiaIndu1er, materiaIndu2do, materiaIndu3ero, materiaIndu4to, materiaIndu5to, materiaIndu6to, materiaIndu7mo, materiaIndu8vo, materiaIndu9no, materiaInduDec } from "./data/dataIndu";
import { semesterOptions } from "./data/dataSemester";

export const induDataHanlder = fields.conditional(
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
      options: materiaIndu1er,
      defaultValue: "F1",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu2do,
      defaultValue: "ALN",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu3ero,
      defaultValue: "AM2",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu4to,
      defaultValue: "AM3",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu5to,
      defaultValue: "MR2",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu6to,
      defaultValue: "GC",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu7mo,
      defaultValue: "IE",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu8vo,
      defaultValue: "PI1",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaIndu9no,
      defaultValue: "CI",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInduDec,
      defaultValue: "IM",
    }),
  },
);
