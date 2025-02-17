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
        <div className="mx-5 xl:mx-52 2xl:mx-52 lg:my-10 flex flex-col gap-y-4 mt-2">
            {/* titulo */}
            <h2 className="text-2xl tracking-tight font-bold">
                {majorData[0].label}
            </h2>
            <div className='flex flex-col md:flex-col-reverse'>

                {/* materias */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-3'>
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
                {/* Selección de Semestres */}
                <div className='fixed bottom-10 left-0 right-0 md:static lg:static xl:static 2xl:static mt-2'>
                    <SemesterSelect
                        major={majorData[0].value}
                        setSemester={setSemester}
                        semester={semester}
                    />
                </div>
            </div>
        </div>
    );
};

export default SubjectSelect;
