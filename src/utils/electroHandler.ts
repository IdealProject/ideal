import { getCollection } from "astro:content";
import { generateFieldsForSemesters } from "./data/dataHandler.ts";
const dataElectro = await getCollection("electro");
export const electroDataHanlder = generateFieldsForSemesters(dataElectro);
