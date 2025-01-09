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
        <div className="flex flex-col justify-around m-5 ">

            {/* Título y materias */}
            <section className="border-5px border-black rounded-lg   ">
                {/* titulo */}
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900">
                    {majorData[0].label}
                </h2>
                {/* materias */}
                <div className='grow'>
                    {majorData[0].value === 'cpa' ? (
                        getMajores(majorData[0].value).map((e, index) => (
                            <ul key={`ul - ${index}`}>
                                <ButtonSubject key={`Sub - ${index}`} content={e.label} href={`/posts/${majorData[0].value}-${e.value}`} />
                            </ul>
                        ))
                    ) : (
                        getMajores(majorData[0].value)[semester]?.map((e, index) => (
                            <ul key={index}>
                                <ButtonSubject key={index} href={`/posts/${majorData[0].value}-${e.value}`} content={e.label} />
                            </ul>
                        ))
                    )}
                </div>
            </section>
            {/* Selección de Semestres */}
            <div >
                <SemesterSelect
                    major={majorData[0].value}
                    setSemester={setSemester}
                />
            </div>
        </div>
    );
};

export default SubjectSelect;
