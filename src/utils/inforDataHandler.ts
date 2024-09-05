import { fields } from "@keystatic/core";
import { dataInforSemestres,dataInforSemestresName } from "./data/dataInfor";
import { semesterOptions } from "./data/dataSemester";
import { indexValues } from "./data/dataHandler";

const indicesDisponibles = indexValues(dataInforSemestres);

export const inforDataHanlder = fields.conditional(
    fields.select(
        {
            label: "Semestre",
            description: "Select the semester",
            options: dataInforSemestresName,
            defaultValue: "1",
        }
    ), {
    1: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[0]],
        defaultValue: dataInforSemestres[indicesDisponibles[0]][0].value
    }
    ),
    2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[1]],
        defaultValue: dataInforSemestres[indicesDisponibles[1]][0].value
    }
    ),
    3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[2]],
        defaultValue: dataInforSemestres[indicesDisponibles[2]][0].value
    }
    ),
    4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[3]],
        defaultValue: dataInforSemestres[indicesDisponibles[3]][0].value
    }
    ),
    5: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[4]],
        defaultValue: dataInforSemestres[indicesDisponibles[4]][0].value
    }
    ),
    6: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[5]],
        defaultValue: dataInforSemestres[indicesDisponibles[5]][0].value
    }
    ),
    7: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[6]],
        defaultValue: dataInforSemestres[indicesDisponibles[6]][0].value
    }
    ),
    8: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[7]],
        defaultValue: dataInforSemestres[indicesDisponibles[7]][0].value
    }
    ),
    9: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[8]],
        defaultValue: dataInforSemestres[indicesDisponibles[8]][0].value
    }
    ),
    10: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataInforSemestres[indicesDisponibles[9]],
        defaultValue: dataInforSemestres[indicesDisponibles[9]][0].value
    }
    ),
}
)