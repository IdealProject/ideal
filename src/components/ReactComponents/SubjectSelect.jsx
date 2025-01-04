import React, { useState, useEffect } from 'react';
import SemesterSelect from './SemesterSelect';
import { materiasCivil } from '../../utils/data/dataCivil';
import { materiasInfor } from '../../utils/data/dataInfor';
import { materiasElectro } from '../../utils/data/dataElectro';
import { materiasIndu } from '../../utils/data/dataIndu';
import { materiaCPA } from '../../utils/data/dataCpa';
import { materiasCBI } from '../../utils/data/dataCBI';

const SubjectSelect = ({ majorData }) => {
    const [semester, setSemester] = useState(1);

    useEffect(() => {
        if (majorData[0].value === 'civil' || majorData[0].value === 'electro') {
            setSemester(5);
        } else {
            setSemester(1); // Reinicia el semestre si cambia a otra carrera
        }
    }, [majorData]); // Ejecuta el efecto cuando `majorData` cambie

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

    return (
        <div className="flex py-4 px-4">
            {/* Selección de Semestres */}
            <div className="w-1/4 flex flex-col m-4">
                <SemesterSelect
                    major={majorData[0].value}
                    setSemester={setSemester}
                    semester={semester}
                />
            </div>
            {/* Título y materias */}
            <section className="w-3/4 p-4 m-4 bg-slate-200 border-5px border-black rounded-lg">
                <h1 className="text-5xl md:4xl xl:4xl font-extrabold mb-4">
                    Ingeniería {majorData[0].label}
                </h1>
                <p className="p-4">Contenido principal</p>

                {majorData[0].value === 'cpa' ? (
                    getMajores(majorData[0].value).map((e, index) => (
                        <li key={index}>
                            <a key={index} href={`/posts/${majorData[0].value}-${e.value}`}>
                                {e.label}
                            </a>
                        </li>
                    ))
                ) : (
                    getMajores(majorData[0].value)[semester]?.map((e, index) => (
                        <li key={index}>
                            <a key={index} href={`/posts/${majorData[0].value}-${e.value}`}>
                                {e.label}
                            </a>
                        </li>
                    ))
                )}
            </section>
        </div>
    );
};

export default SubjectSelect;
