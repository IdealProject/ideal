

const initials = (cadena: string) => {
    const words = cadena.split(' ')
    const initials = words.map(e => e.charAt(0))
    if (words.length === 1) { initials.push(words[0].charAt(1)) }

    return initials.join('')
}


export const dataSemestreProcess = (data: any) => {
    const dataCarrera = data.map((e: any) => e.data.materias)
    return dataCarrera.map((e: any) =>
        e.map((i: string) => ({
            label: i,
            value: initials(i)
        })))
}
export const dataSemestre = (data: any) => {
    const dataCarrera = data.map((e: any) => e.data.name)
    return dataCarrera.map((e:any,index:number) => ({
        label:e,
        value:(index+1).toString()
    }))
}
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
