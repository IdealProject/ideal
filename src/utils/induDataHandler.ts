
import { generateFieldsForSemesters } from "./data/dataHandler";
import { getCollection } from "astro:content";
const dataIndu = await getCollection("infor");

export const induDataHanlder = generateFieldsForSemesters(dataIndu);