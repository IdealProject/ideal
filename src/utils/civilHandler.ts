import { getCollection } from "astro:content";
import { generateFieldsForSemesters } from "./data/dataHandler.ts";
const dataCivil = await getCollection("civil");
export const civilDataHanlder =  generateFieldsForSemesters(dataCivil);
