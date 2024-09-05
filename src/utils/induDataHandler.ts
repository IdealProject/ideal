import { fields } from "@keystatic/core";
import { datainduSemestres,datainduSemestresName } from "./data/dataIndu";
import { indexValues } from "./data/dataHandler";

const indicesDisponibles = indexValues(datainduSemestres);

export const induDataHanlder = fields.conditional(
    fields.select(
        {
            label: "Semestre",
            description: "Select the semester",
            options: datainduSemestresName,
            defaultValue: "1",
        }
    ), {
    1: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[0]],
        defaultValue: datainduSemestres[indicesDisponibles[0]][0].value
    }
    ),
    2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[1]],
        defaultValue: datainduSemestres[indicesDisponibles[1]][0].value
    }
    ),
    3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[2]],
        defaultValue: datainduSemestres[indicesDisponibles[2]][0].value
    }
    ),
    4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[3]],
        defaultValue: datainduSemestres[indicesDisponibles[3]][0].value
    }
    ),
    5: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[4]],
        defaultValue: datainduSemestres[indicesDisponibles[4]][0].value
    }
    ),
    6: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[5]],
        defaultValue: datainduSemestres[indicesDisponibles[5]][0].value
    }
    ),
    7: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[6]],
        defaultValue: datainduSemestres[indicesDisponibles[6]][0].value
    }
    ),
    8: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[7]],
        defaultValue: datainduSemestres[indicesDisponibles[7]][0].value
    }
    ),
    9: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[8]],
        defaultValue:  datainduSemestres[indicesDisponibles[8]][0].value
    }
    ),
    10: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: datainduSemestres[indicesDisponibles[9]],
        defaultValue:  datainduSemestres[indicesDisponibles[9]][0].value
    }
    ),
}
)