
import { getCollection } from "astro:content";
const datainfor = await getCollection("infor");

const datainfores = datainfor.map((e) => e.data.materias)

export const dataSemestresMaterias = datainfores.map(e => 
    e.map((i: string, index: number) => ({
        label: i,
        value: index.toString()
    })))
    
// export const materiaInfor1er = [

//     { label: 'Fisica 1', value: 'F1' },
//     { label: 'Arquitectura y Componentes', value: 'Arq1' },
//     { label: 'Introducción a la Programación 1', value: 'P1' },
//     { label: 'Comunicación Técnica 1', value: 'C1' },
//     { label: 'Análisis 1', value: 'A1' },
// ];

// export const materiaInfor2do = [
//     { label: 'Fisica 2', value: 'F2' },
//     { label: 'Matemática Discreta', value: 'Dis' },
//     { label: 'Introducción a la Programación 2', value: 'P2' },
//     { label: 'Comunicación Técnica 2', value: 'C2' },
//     { label: 'Análisis Matemático 2', value: 'A2' },
// ];