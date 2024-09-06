
import { generateFieldsForSemesters } from "./data/dataHandler";
import { getCollection } from "astro:content";
const dataCPA = await getCollection("cpa");

export const cpaDataHandler = generateFieldsForSemesters(dataCPA);