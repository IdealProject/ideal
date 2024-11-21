const SemesterSelect = ({ setSemester, semester, major }) => {
  const totalSemesters = major === 'cpa' ? 1 : 10;

  return (
    <div className='flex flex-col items-center border-pink-500 bg-slate-100 rounded-lg p-4 m-4'>
      <p>Semestre actual: {semester}</p>
      {[...Array(totalSemesters)].map((_, index) => (
        <button
          key={index + 1}
          className='hover:underline'
          onClick={() => setSemester(index + 1)}
        >
          {index + 1}॰ Semestre
        </button>
      ))}
    </div>
  );
};

export default SemesterSelect;