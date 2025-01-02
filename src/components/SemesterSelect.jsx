import { semesterOptions, semesterOptionsCBI, semesterOptionsCE } from '../utils/data/dataSemester';

const SemesterSelect = ({ setSemester, semester, major }) => {
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
    <div className='flex flex-col items-center border-pink-500 bg-slate-100 rounded-lg p-4 m-4'>
      <p>Semestre actual: {semester}</p>
      {semesterOpt.map((e, index) => <button key={index} className='hover:underline' onClick={ () => setSemester(e.value)}>{e.label}</button>)}
    </div>
  );
};
// <button
//           key={index + 1}
//           className='hover:underline'
//           onClick={() => setSemester(index + 1)}
//         ></button>
export default SemesterSelect;