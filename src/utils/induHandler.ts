import { getCollection } from "astro:content";
import { generateFieldsForSemesters } from "./data/dataHandler.ts";
const dataIndu = await getCollection("indu");
export const induDataHanlder = generateFieldsForSemesters(dataIndu);
