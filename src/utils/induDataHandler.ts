import { fields } from "@keystatic/core";
// import { materiaInfor1er, materiaInfor2do } from "./data/dataInfor";

import { dataSemestresMaterias} from "./data/dataInfor";


import { semesterOptions } from "./data/dataSemester";

const indexValues = (dataSemestresMaterias: Array<Array<String>>) => {
    let result = [];
    for (let i = 0; i < dataSemestresMaterias.length; i++) {
        result.push(i);
    }
    if(dataSemestresMaterias.length < 10){
        for (let i = dataSemestresMaterias.length; i < 10; i++) {
            result.push(0);
        }
    }
    return result;
}
const indicesDisponibles = indexValues(dataSemestresMaterias);

export const induDataHanlder = fields.conditional(
    fields.select(
        {
            label: "Semestre",
            description: "Select the semester",
            options: semesterOptions,
            defaultValue: "1",
        }
    ), {
    1: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[0]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[0]][0].value
    }
    ),
    2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[1]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[1]][0].value
    }
    ),
    3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[2]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[2]][0].value
    }
    ),
    4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[3]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[3]][0].value
    }
    ),
    5: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[4]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[4]][0].value
    }
    ),
    6: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[5]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[5]][0].value
    }
    ),
    7: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[6]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[6]][0].value
    }
    ),
    8: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[7]],
        defaultValue: dataSemestresMaterias[indicesDisponibles[7]][0].value
    }
    ),
    9: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[8]],
        defaultValue:  dataSemestresMaterias[indicesDisponibles[8]][0].value
    }
    ),
    10: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[indicesDisponibles[9]],
        defaultValue:  dataSemestresMaterias[indicesDisponibles[9]][0].value
    }
    ),
}
)