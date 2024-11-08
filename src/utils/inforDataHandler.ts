import { fields } from "@keystatic/core";
import { materiaInfor1er, materiaInfor2do,materiaInfor3er,materiaInfor4to,materiaInfor5to,materiaInfor6to,materiaInfor7mo,materiaInfor8vo,materiaInfor9no,materiaInfor10mo } from "./data/dataInfor";
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
      options: materiaInfor1er,
      defaultValue: "F1",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor2do,
      defaultValue: "F2",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor3er,
      defaultValue: "A3",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor4to,
      defaultValue: "PyE",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor5to,
      defaultValue: "Te",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor6to,
      defaultValue: "Sg",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor7mo,
      defaultValue: "Is1",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor8vo,
      defaultValue: "Is2",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor9no,
      defaultValue: "Au",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiaInfor10mo,
      defaultValue: "Gc",
    }),
  },
);
