
import { getCollection } from "astro:content";
import { dataSemestreProcess,dataSemestre } from "./dataHandler";
const dataElectro = await getCollection("electro");

export const dataElectroSemestres = dataSemestreProcess(dataElectro);
export const dataElectroSemestresName = dataSemestre(dataElectro);

