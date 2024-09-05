
import { getCollection } from "astro:content";
const datainfor = await getCollection("infor");

const datainfores = datainfor.map((e) => e.data.materias)

const initials = (cadena:string) => {
    const words = cadena.split(' ')
    const initials = words.map(e => e.charAt(0))
    return initials.join('')
}

export const dataSemestresMaterias = datainfores.map(e =>
    e.map((i: string) => ({
        label: i,
        value: initials(i)
    })))
