import { fields } from "@keystatic/core";

import { dataElectroSemestres,dataElectroSemestresName } from "./data/dataElectro";
import { semesterOptions } from "./data/dataSemester";
import { indexValues } from "./data/dataHandler";
const indicesDisponibles = indexValues(dataElectroSemestres);

export const electroDataHanlder = fields.conditional(
    fields.select(
        {
            label: "Semestre",
            description: "Select the semester",
            options: dataElectroSemestresName,
            defaultValue: "1",
        }
    ), {
    1: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[0]],
        defaultValue: dataElectroSemestres[indicesDisponibles[0]][0].value
    }
    ),
    2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[1]],
        defaultValue: dataElectroSemestres[indicesDisponibles[1]][0].value
    }
    ),
    3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[2]],
        defaultValue: dataElectroSemestres[indicesDisponibles[2]][0].value
    }
    ),
    4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[3]],
        defaultValue: dataElectroSemestres[indicesDisponibles[3]][0].value
    }
    ),
    5: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[4]],
        defaultValue: dataElectroSemestres[indicesDisponibles[4]][0].value
    }
    ),
    6: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[5]],
        defaultValue: dataElectroSemestres[indicesDisponibles[5]][0].value
    }
    ),
    7: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[6]],
        defaultValue: dataElectroSemestres[indicesDisponibles[6]][0].value
    }
    ),
    8: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[7]],
        defaultValue: dataElectroSemestres[indicesDisponibles[7]][0].value
    }
    ),
    9: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[8]],
        defaultValue:  dataElectroSemestres[indicesDisponibles[8]][0].value
    }
    ),
    10: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataElectroSemestres[indicesDisponibles[9]],
        defaultValue:  dataElectroSemestres[indicesDisponibles[9]][0].value
    }
    ),
}
)