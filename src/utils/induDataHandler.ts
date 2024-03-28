import { fields } from "@keystatic/core";
import { materiaInfor1er, materiaInfor2do } from "./data/dataInfor";
import { semesterOptions } from "./data/dataSemester";

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
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    2: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor2do,
        defaultValue: 'F2'
    }
    ),
    3: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    4: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    5: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    6: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    7: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    8: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    9: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
    10: fields.select({
        label: "Subject",
        description: "Enter the subject of the post",
        options: materiaInfor1er,
        defaultValue: 'F1'
    }
    ),
}
)