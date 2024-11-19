import { fields } from "@keystatic/core";
import { materiaCivil1er,materiaCivil2do,materiaCivil3ero,materiaCivil4to,materiaCivil5to,materiaCivil6to,materiaCivil7mo,materiaCivil8vo,materiaCivil9no,materiaCivilDec } from "./data/dataCivil";
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
      options: materiaCivil1er,
      defaultValue: "F1",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil2do,
      defaultValue: "F2",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil3ero,
      defaultValue: "DT1",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil4to,
      defaultValue: "DT2",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil5to,
      defaultValue: "EIE",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil6to,
      defaultValue: "CE",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil7mo,
      defaultValue: "EMT",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil8vo,
      defaultValue: "CAE",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivil9no,
      defaultValue: "CAEM",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaCivilDec,
      defaultValue: "LEG",
    }),
  },
);
