import { getCollection } from "astro:content";
import { generateFieldsForSemesters } from "./data/dataHandler.ts";
const dataInfor = await getCollection("infor");
export const inforDataHanlder = generateFieldsForSemesters(dataInfor);
