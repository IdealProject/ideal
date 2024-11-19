import React, { useState } from 'react';
import SemesterSelect from './SemesterSelect';
const SubjectSelect = ({majorData,postsCollection}) => {
    const [semester, setSemester] = useState(1);
    const semesterPost = postsCollection.filter((e) => e.data.major.value.discriminant == semester)

    return (
        <div className="flex py-4 px-4">
        {/* Selección de Semestres  */}
        <div className='w-1/4 flex flex-col m-4'>
        <SemesterSelect setSemester={setSemester} semester={semester}/>
        </div>
        {/* titulo y materias  */}
        <section className="w-3/4 p-4 m-4 bg-slate-200 border-5px boder-black rounded-lg ">
            <h1 className="text-5xl md:4xl xl:4xl font-extrabold mb-4">Ingeniería {majorData[0].label}</h1>
            <p>Contenido principal</p>
            <p>{semesterPost.map((e) => (<li className='hover:underline'><a href={`/posts/${e.slug}`}  >{e.data.title}</a></li>))}</p>
        </section>
        </div>
    );
};

export default SubjectSelect;
