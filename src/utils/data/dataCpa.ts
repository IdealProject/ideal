
import { getCollection } from "astro:content";
import { dataSemestreProcess } from "./dataHandler";
const datacpa = await getCollection("cpa");

export const datacpaSemestres = dataSemestreProcess(datacpa);

