
import { generateFieldsForSemesters } from "./data/dataHandler";
import { getCollection } from "astro:content";
const dataElectro = await getCollection("infor");

export const electroDataHanlder = generateFieldsForSemesters(dataElectro);