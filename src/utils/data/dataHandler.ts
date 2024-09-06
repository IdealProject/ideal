import { fields } from "@keystatic/core";


// Function that creates the initials for the value of a materia
const initials = (cadena: string) => {
    const words = cadena.split(' ')
    const initials = words.map(e => e.charAt(0))
    if (words.length === 1) { initials.push(words[0].charAt(1)) }

    return initials.join('')
}

// Function that obtain a collection of the semesters and create a array with objects of the materias in the semester
export const dataSemestreProcess = (data: any) => {
    const dataCarrera = data.map((e: any) => e.data.materias)
    return dataCarrera.map((e: any) =>
        e.map((i: string) => ({
            label: i,
            value: initials(i)
        })))
}
//Function that obtain a collection and make a array of the semesters in 
export const dataSemestre = (data: any) => {
    const dataCarrera = data.map((e: any) => e.data.name)
    return dataCarrera.map((e: any, index: number) => ({
        label: e,
        value: (index + 1).toString()
    }))
}
// We Check the amount of semester already created in the collection (major) and we create a array of posibles index for assign it in the fields select later 
// if the amount of semester is less than 10 we add 0 to the array
export const indexValues = (dataInforSemestres: Array<Array<String>>) => {
    let result = [];
    for (let i = 0; i < dataInforSemestres.length; i++) {
        result.push(i);
    }
    if (dataInforSemestres.length < 10) {
        for (let i = dataInforSemestres.length; i < 10; i++) {
            result.push(0);
        }
    }
    return result;
}
export const generateFieldsForSemesters = (dataMajor:any) => {
    const semestersData = dataSemestreProcess(dataMajor);

    const semesterNames = dataSemestre(dataMajor);
    const indicesDisponibles = semestersData.map((_:any, index:any) => index); // Genera índices de acuerdo a la cantidad de semestres disponibles

    return fields.conditional(
        fields.select({
            label: "Semestre",
            description: "Select the semester",
            options: semesterNames,
            defaultValue: semesterNames[0].value,
        }),
        Object.fromEntries(
            indicesDisponibles.map((index:any) => [
                (index + 1).toString(),  // Mantén el índice alineado con los semestres
                fields.select({
                    label: "Subject",
                    description: "Enter the subject of the post",
                    options: semestersData[index] || [],
                    defaultValue: semestersData[index] ? semestersData[index][0].value : ""
                })
            ])
        )
    );
};