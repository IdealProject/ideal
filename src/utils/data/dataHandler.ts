import { fields } from "@keystatic/core";

// Function that creates the initials for the value of a subject
const getInitials = (text: string): string => {
    const words = text.split(' ');
    const initials = words.map(word => word.charAt(0));
    if (words.length === 1) {
        initials.push(words[0].charAt(1));
    }
    return initials.join('');
};

// Function that processes a collection of semesters and creates an array of objects for the subjects in each semester
export const processSemesterData = (data: any[]): { label: string, value: string }[][] => {
    return data.map(semester => 
        semester.data.materias.map((subject: string) => ({
            label: subject,
            value: getInitials(subject)
        }))
    );
};

// Function that processes a collection and creates an array of semester names
export const getSemesterNames = (data: any[]): { label: string, value: string }[] => {
    return data.map((semester, index) => ({
        label: semester.data.name,
        value: (index + 1).toString()
    }));
};

// Function that generates an array of available indices for the semesters
export const generateIndexValues = (semestersData: { label: string, value: string }[][]): number[] => {
    const indices = Array.from({ length: semestersData.length }, (_, i) => i);
    while (indices.length < 10) {
        indices.push(0);
    }
    return indices;
};

// Function that generates fields for semesters
export const generateFieldsForSemesters = (dataMajor: any[]): any => {
    const semestersData = processSemesterData(dataMajor);
    const semesterNames = getSemesterNames(dataMajor);
    const indicesDisponibles = generateIndexValues(semestersData);

    return fields.conditional(
        fields.select({
            label: "Semestre",
            description: "Select the semester",
            options: semesterNames,
            defaultValue: semesterNames[0].value,
        }),
        Object.fromEntries(
            indicesDisponibles.map(index => [
                (index + 1).toString(),
                fields.select({
                    label: "Subject",
                    description: "Enter the subject of the post",
                    options: semestersData[index] || [],
                    defaultValue: semestersData[index] ? semestersData[index][0].value : ""
                })
            ])
        )
    );
};