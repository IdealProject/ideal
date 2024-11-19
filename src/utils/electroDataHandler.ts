import { fields } from "@keystatic/core";
import { materia10mo,materia1er,materia2do,materia3er,materia4to,materia5to,materia6to,materia7mo,materia8vo,materia9no } from "./data/dataElectro";
import { semesterOptions } from "./data/dataSemester";

export const electroDataHanlder = fields.conditional(
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
      options: materia1er,
      defaultValue: "AL",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia2do,
      defaultValue: "F2",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia3er,
      defaultValue: "DT1",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia4to,
      defaultValue: "DT2",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia5to,
      defaultValue: "MM2",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia6to,
      defaultValue: "CE",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia7mo,
      defaultValue: "TM2",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia8vo,
      defaultValue: "ME2",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia9no,
      defaultValue: "II",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materia10mo,
      defaultValue: "IM",
    }),
  },
);
