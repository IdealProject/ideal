import React, { useState } from 'react';

const SemesterSelect = ({setSemester,semester}) => {
 
  return (
    <div className='flex flex-col items-center border-pink-500 bg-slate-100 rounded-lg p-4 m-4' >
      <p>Semestre actual: {semester}</p>
      <button className='hover:underline' onClick={() => setSemester(1)}>1er Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(2)}>2do Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(3)}>3er Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(4)}>4to Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(5)}>5to Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(6)}>6to Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(7)}>7mo Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(8)}>8vo Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(9)}>9no Semestre</button>
      <button className='hover:underline' onClick={() => setSemester(10)}>10mo Semestre</button>
    </div>
  );
};

export default SemesterSelect;
