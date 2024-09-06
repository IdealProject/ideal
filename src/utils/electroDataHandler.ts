
import { generateFieldsForSemesters } from "./data/dataHandler";
import { getCollection } from "astro:content";
const dataElectro = await getCollection("electro");

export const electroDataHanlder = generateFieldsForSemesters(dataElectro);