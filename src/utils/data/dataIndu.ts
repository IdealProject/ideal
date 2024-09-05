
import { getCollection } from "astro:content";
import { dataSemestreProcess,dataSemestre } from "./dataHandler";
const dataindu = await getCollection("indu");

export const datainduSemestres = dataSemestreProcess(dataindu);
export const datainduSemestresName = dataSemestre(dataindu);

