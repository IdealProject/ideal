export const materiaCivil1er = [
    { label: "Álgebra", value: "AL" },
    { label: "Análisis Matemático 1", value: "A1" },
    { label: "Física 1", value: "F1" },
    { label: "Geometría", value: "GE" },
    { label: "Inglés", value: "IN" },
    { label: "Química 1", value: "Q1" },
];

export const materiaCivil2do = [
    { label: "Álgebra Lineal", value: "AN" },
    { label: "Análisis Matemático 2", value: "A2" },
    { label: "Física 2", value: "F2" },
    { label: "Análisis Vectorial", value: "AV" },
    { label: "Computación 1", value: "C1" },
    { label: "Química 2", value: "Q2" },
];

export const materiaCivil3ero = [
    { label: "Diseño Técnico I", value: "DT1" },
    { label: "Análisis Matemático III", value: "A3" },
    { label: "Física III", value: "F3" },
    { label: "Mecánica Racional I", value: "MR1" },
    { label: "Probabilidades y Estadística", value: "PE" },
    { label: "Computación II", value: "C2" },
    { label: "Diseño Asistido por Computadora I", value: "DAC1" },
];

export const materiaCivil4to = [
    { label: "Diseño Técnico II", value: "DT2" },
    { label: "Cálculo Numérico", value: "CN" },
    { label: "Mecánica Racional II", value: "MR2" },
    { label: "Mecánica de los Materiales I", value: "MM1" },
    { label: "Tecnología de los Materiales", value: "TM" },
    { label: "Diseño Asistido por Computadora II", value: "DAC2" },
    { label: "Construcciones", value: "CON" },
];

export const materiaCivil5to = [
    { label: "Electrotecnia e Instalaciones Eléctricas", value: "EIE" },
    { label: "Geología Aplicada", value: "GA" },
    { label: "Hidráulica", value: "HID" },
    { label: "Mecánica de Materiales II", value: "MM2" },
    { label: "Tecnología del Hormigón", value: "TH" },
    { label: "Topografía", value: "TOPO" },
];

export const materiaCivil6to = [
    { label: "Cálculo de Estructuras", value: "CE" },
    { label: "Estructuras de Madera", value: "EM" },
    { label: "Geotecnia I", value: "G1" },
    { label: "Ingeniería Sanitaria y Ambiental", value: "ISA" },
    { label: "Proyecto Arquitectónico y Estructural", value: "PAE" },
    { label: "Redacción Técnica y Científica", value: "RTC" },
];

export const materiaCivil7mo = [
    { label: "Estructuras Metálicas", value: "EMT" },
    { label: "Geotecnia II", value: "G2" },
    { label: "Hidrología y Gestión de Cuencas", value: "HGC" },
    { label: "Hormigón Armado I", value: "HA1" },
    { label: "Instalaciones y Equipamientos de Edificios", value: "IEE" },
    { label: "Vías de Comunicación I", value: "VC1" },
];

export const materiaCivil8vo = [
    { label: "Cálculo Avanzado de Estructuras", value: "CAE" },
    { label: "Hormigón Armado II", value: "HA2" },
    { label: "Ingeniería Económica", value: "IE" },
    { label: "Planeamiento Urbano y Territorial", value: "PUT" },
    { label: "Tecnología de la Construcción", value: "TC" },
    { label: "Vías de Comunicación II", value: "VC2" },
];

export const materiaCivil9no = [
    { label: "Contabilidad y Administración de Empresas", value: "CAEM" },
    { label: "Hormigón Pretensado y Prefabricado", value: "HPP" },
    { label: "Ingeniería Fluvial y Puertos", value: "IFP" },
    { label: "Metodología de Trabajo Final de Grado", value: "MTFG" },
    { label: "Obras Hidráulicas", value: "OH" },
    { label: "Programación y Control de Obras", value: "PCO" },
];

export const materiaCivilDec = [
    { label: "Legislación", value: "LEG" },
    { label: "Patología de las Construcciones", value: "PC" },
    { label: "Puentes", value: "PUE" },
    { label: "Sistemas Integrados de Gestión", value: "SIG" },
    { label: "Tasaciones y Pericias", value: "TP" },
];


const allValues = [
    ...materiaCivil9no.map(item => item.value),
    ...materiaCivilDec.map(item => item.value)
];

const duplicates = allValues.filter((item, index) => allValues.indexOf(item) !== index);

console.log("Duplicate values:", duplicates);