
import { generateFieldsForSemesters } from "./data/dataHandler";
import { getCollection } from "astro:content";
const dataCivil = await getCollection("infor");

export const civilDataHanlder =  generateFieldsForSemesters(dataCivil);
