import React, { useState, useEffect } from 'react';
import SemesterSelect from './SemesterSelect';
import { materiasCivil } from '../../utils/data/dataCivil';
import { materiasInfor } from '../../utils/data/dataInfor';
import { materiasElectro } from '../../utils/data/dataElectro';
import { materiasIndu } from '../../utils/data/dataIndu';
import { materiaCPA } from '../../utils/data/dataCpa';
import { materiasCBI } from '../../utils/data/dataCBI';
import ButtonSubject from './ButtonSubject';

const SubjectSelect = ({ majorData }) => {
    // Helper para determinar el semestre por defecto según la carrera
    const getDefaultSemester = (majorValue) => {
        return (majorValue === 'civil' || majorValue === 'electro') ? '5' : '1';
    };

    // Intenta cargar el semestre guardado si la carrera es la misma.
    // Si la carrera cambió o no hay nada guardado, usa el semestre por defecto definido anteriormente
    const [semester, setSemester] = useState(() => {
        if (typeof window === "undefined" || !localStorage) {
            return getDefaultSemester(majorData[0].value);
        }

        const storedMajor = localStorage.getItem("selectedMajor");
        const storedSemester = localStorage.getItem("selectedSemester");
        const currentMajorValue = majorData[0].value;

        // Si la carrera guardada es la misma Y hay un semestre guardado, usar el mismo.
        if (storedMajor === currentMajorValue && storedSemester) {
            return storedSemester;
        } else {
            // Si la carrera cambió o no había nada guardado, usar el default para la nueva carrera.
            return getDefaultSemester(currentMajorValue);
        }
    });

    useEffect(() => {
        if (majorData && majorData[0] && majorData[0].value) {
            const currentMajorValue = majorData[0].value;
            const defaultSemesterForThisMajor = getDefaultSemester(currentMajorValue);
            const storedMajor = typeof window !== "undefined" && localStorage ? localStorage.getItem("selectedMajor") : null;

            // Si la carrera cambió, reiniciar el semestre al valor por defecto de esa carrera (tener el cuenta carreras que empiezan en 5)
            if (storedMajor !== currentMajorValue) {
                setSemester(defaultSemesterForThisMajor);
                if (typeof window !== "undefined" && localStorage) {
                    localStorage.setItem("selectedMajor", currentMajorValue);
                    localStorage.setItem("selectedSemester", defaultSemesterForThisMajor); 
                }
            } else {
                // Si estamos en la misma carrera, mantener el semestre actual sincronizado en localStorage.
                if (typeof window !== "undefined" && localStorage) {
                    localStorage.setItem("selectedMajor", currentMajorValue);
                    localStorage.setItem("selectedSemester", semester); // Guarda el 'semester' actual (puede ser una selección del usuario)
                }
            }
        }
    }, [majorData, semester]); 

    // Función para obtener las materias correctas según la carrera
    const getMajores = (major) => {
        switch (major) {
            case 'civil':
                return materiasCivil || [];
            case 'infor':
                return materiasInfor || [];
            case 'electro':
                return materiasElectro || [];
            case 'indu':
                return materiasIndu || [];
            case 'cpa':
                return materiaCPA || [];
            case 'cbi':
                return materiasCBI || [];
            default:
                return [];
        }
    };

    // handleSemesterChange: Callback que recibe SemesterSelect cuando el usuario selecciona un semestre.
    const handleSemesterChange = (newSemester) => {
        setSemester(newSemester); 
        if (typeof window !== "undefined" && localStorage) {
            localStorage.setItem("selectedSemester", newSemester);
        }
    };

    // Obtiene las materias de la carrera actual basadas en el 'semester' actual.
    const currentMajorSubjects = getMajores(majorData[0].value);
    const subjectsToDisplay = majorData[0].value === 'cpa' ?
        currentMajorSubjects :
        currentMajorSubjects[semester];

    return (
        <div className="mx-5 xl:mx-52 2xl:mx-52 lg:my-10 flex flex-col gap-y-4 mt-2">
            {/* Título de la carrera */}
            <h2 className="text-2xl tracking-tight font-bold">
                {majorData[0].label}
            </h2>
            <div className='flex flex-col md:flex-col-reverse'>

                {/* materias */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-3'>
                    {subjectsToDisplay && subjectsToDisplay.length > 0 ? (
                        subjectsToDisplay.map((e, index) => (
                            <ul key={`ul-${index}`}>
                                <ButtonSubject
                                    key={`Sub-${index}`}
                                    content={e.label}
                                    href={`/posts/${majorData[0].value}-${e.value}`}
                                />
                            </ul>
                        ))
                    ) : (
                        <p className="text-gray-500">No hay materias disponibles para este semestre.</p>
                    )}
                </div>
                {/* Selección de Semestres */}
                <div className='fixed bottom-10 left-0 right-0 md:static lg:static xl:static 2xl:static mt-2'>
                    <SemesterSelect
                        major={majorData[0].value}
                        onSemesterChange={handleSemesterChange}
                        currentSelectedSemester={semester}
                    />
                </div>
            </div>
        </div>
    );
};

export default SubjectSelect;