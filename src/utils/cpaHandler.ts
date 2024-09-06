import { getCollection } from "astro:content";
import { generateFieldsForSemesters } from "./data/dataHandler.ts";
const dataCPA = await getCollection("cpa");
export const cpaDataHandler = generateFieldsForSemesters(dataCPA);
