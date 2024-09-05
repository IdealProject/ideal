
import { getCollection } from "astro:content";
import { dataSemestreProcess, dataSemestre } from "./dataHandler";
const datainfor = await getCollection("infor");

export const dataInforSemestres = dataSemestreProcess(datainfor);

export const dataInforSemestresName = dataSemestre(datainfor);