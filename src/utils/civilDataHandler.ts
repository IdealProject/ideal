import { fields } from "@keystatic/core";
import { datacivilSemestres,dataCivilSemestresName } from "./data/dataCivil";
import { semesterOptions } from "./data/dataSemester";
import { indexValues } from "./data/dataHandler";

const indicesDisponibles = indexValues(datacivilSemestres);

export const civilDataHanlder = fields.conditional(
    fields.select(
        {
            label: "Semestre",
            description: "Select the semester",
            options: dataCivilSemestresName,
            defaultValue: "1",
        }
    ), {
    1: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[0]],
        defaultValue: datacivilSemestres[indicesDisponibles[0]][0].value
    }
    ),
    2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[1]],
        defaultValue: datacivilSemestres[indicesDisponibles[1]][0].value
    }
    ),
    3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[2]],
        defaultValue: datacivilSemestres[indicesDisponibles[2]][0].value
    }
    ),
    4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[3]],
        defaultValue: datacivilSemestres[indicesDisponibles[3]][0].value
    }
    ),
    5: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[4]],
        defaultValue: datacivilSemestres[indicesDisponibles[4]][0].value
    }
    ),
    6: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[5]],
        defaultValue: datacivilSemestres[indicesDisponibles[5]][0].value
    }
    ),
    7: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[6]],
        defaultValue: datacivilSemestres[indicesDisponibles[6]][0].value
    }
    ),
    8: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[7]],
        defaultValue: datacivilSemestres[indicesDisponibles[7]][0].value
    }
    ),
    9: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[8]],
        defaultValue:  datacivilSemestres[indicesDisponibles[8]][0].value
    }
    ),
    10: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacivilSemestres[indicesDisponibles[9]],
        defaultValue:  datacivilSemestres[indicesDisponibles[9]][0].value
    }
    ),
}
)