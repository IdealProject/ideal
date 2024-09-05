import { fields } from "@keystatic/core"
import { datacpaSemestres } from "./data/dataCpa"

export const cpaDataHandler = fields.select(
    {
        label: "Subject",
        description: "Enter the subject of the post",
        options: datacpaSemestres[0],
        defaultValue: 'Al'
    }
)