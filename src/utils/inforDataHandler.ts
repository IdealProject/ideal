import { fields } from "@keystatic/core";
// import { materiaInfor1er, materiaInfor2do } from "./data/dataInfor";

import { dataSemestresMaterias} from "./data/dataInfor";


import { semesterOptions } from "./data/dataSemester";

export const inforDataHanlder = fields.conditional(
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
        options: dataSemestresMaterias[0],
        defaultValue: '0'
    }
    ),
    2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    5: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    6: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    7: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    8: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    9: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
    10: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: dataSemestresMaterias[1],
        defaultValue: '0'
    }
    ),
}
)