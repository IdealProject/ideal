import { semesterOptions, semesterOptionsCBI, semesterOptionsCE } from '../../utils/data/dataSemester';

const SemesterSelect = ({ setSemester,semester, major }) => {
  let cpaOpt = [{ label: "Primer Semestre", value: "1" }]
  let semesterOpt;

  switch (major) {
    case 'cbi':
      semesterOpt = semesterOptionsCBI;
      break;
    case 'civil':
      semesterOpt = semesterOptionsCE;
      break;
    case 'electro':
      semesterOpt = semesterOptionsCE;
      break;
    case 'cpa':
      semesterOpt = cpaOpt;
      break;
    default:
      semesterOpt = semesterOptions;
      break;
  }

  return (

    <div className='md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 py-3'>
      <p className='text-gray-600 mb-4 px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>Selector de Semestres</p>
      <div className='flex flex-row items-center overflow-auto px-5 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
        {semesterOpt.map((e, index) =>
          <div key={index + 1} className='mr-1 '>
            <button className={` bg-blue-200 hover:bg-blue-400 transition-all ease-in-out duration-150 active:scale-90 rounded-full size-12 flex items-center justify-center ${semester == e.value? 'bg-blue-700 text-white': ''} ` }key={index} onClick={() => setSemester(e.value)}>{e.value}</button>
          </div>)}

    </div>
    </div >
  );
};
export default SemesterSelect;