
import { generateFieldsForSemesters } from "./data/dataHandler";
import { getCollection } from "astro:content";
const dataInfor = await getCollection("infor");

export const inforDataHanlder = generateFieldsForSemesters(dataInfor);