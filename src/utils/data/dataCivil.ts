
import { getCollection } from "astro:content";
import { dataSemestreProcess,dataSemestre } from "./dataHandler";
const datacivil = await getCollection("civil");

export const datacivilSemestres = dataSemestreProcess(datacivil);
export const dataCivilSemestresName = dataSemestre(datacivil);

