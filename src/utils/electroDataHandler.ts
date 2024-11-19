import { fields } from "@keystatic/core";
import { materiasElectro } from "./data/dataElectro";
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
      options: materiasElectro[1],
      defaultValue: "AL",
    }),
    2: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[2],
      defaultValue: "F2",
    }),
    3: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[3],
      defaultValue: "DT1",
    }),
    4: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[4],
      defaultValue: "DT2",
    }),
    5: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[5],
      defaultValue: "MM2",
    }),
    6: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[6],
      defaultValue: "CE",
    }),
    7: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[7],
      defaultValue: "TM2",
    }),
    8: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[8],
      defaultValue: "ME2",
    }),
    9: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[9],
      defaultValue: "II",
    }),
    10: fields.select({
      label: "Subject",
      description: "Enter the subject of the post",
      options: materiasElectro[10],
      defaultValue: "IM",
    }),
  },
);
