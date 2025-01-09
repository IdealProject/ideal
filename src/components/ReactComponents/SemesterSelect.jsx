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

    <div className='md:mb-4 mx-5 md:mx-5 lg:mx-0 xl:mx-0'>
      <p className='text-gray-600 mb-4'>Selector de Semestres</p>
      <div className='flex flex-row items-center overflow-auto'>
        {semesterOpt.map((e, index) =>
          <div key={index + 1} className='mr-1 '>
            <button className={` bg-blue-200 hover:border-blue-700 hover:border-4  rounded-full w-10 h-10 flex items-center justify-center ${semester == e.value? 'bg-blue-700 text-white': ''} ` }key={index} onClick={() => setSemester(e.value)}>{e.value}</button>
          </div>)}

    </div>
    </div >
  );
};
export default SemesterSelect;