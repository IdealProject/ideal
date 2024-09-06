
import { generateFieldsForSemesters } from "./data/dataHandler.ts";
import { getCollection } from "astro:content";
const dataCivil = await getCollection("civil");

export const civilDataHanlder =  generateFieldsForSemesters(dataCivil);
