import { semesterOptions, semesterOptionsCBI, semesterOptionsCE } from '../../utils/data/dataSemester';

const SemesterSelect = ({ setSemester, major }) => {
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
    <div className='flex flex-col md:mb-4'>
      <p className='text-gray-600'>Selector de Semestres</p>
      <div className='flex flex-row items-center overflow-auto'>
        {semesterOpt.map((e, index) =>
          <div key={index+1} className='mr-1 '>
            <button className='bg-blue-200 hover:bg-blue-700 hover:text-white  rounded-full w-10 h-10 flex items-center justify-center ' key={index} onClick={() => setSemester(e.value)}>{e.value}</button>
          </div>)}

      </div>
    </div>
  );
};
export default SemesterSelect;