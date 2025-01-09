
const ButtonSubject = ({ href, content }) => {
    return (
        <a className="bg-gray-200 rounded-xl  p-2 my-2 flex flex-row align-middle justify-between" href={href} >
            <div className="flex flex-row items-center ">
                <div className="bg-red-500 text-red-500 w-6 h-6  rounded-md" >.</div>
                <p className="font-bold px-4">{content}</p>
            </div>
            <svg
                className="w-6 h-8"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 12H5m14 0-4 4m4-4-4-4"></path>
            </svg>
        </a>
    )
}

export default ButtonSubject