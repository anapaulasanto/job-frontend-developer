import { TiDelete } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

export default function Input() {
    const inputRef = useRef();

    return (
        <div className="flex flex-col relative w-full">
            <div className="flex justify-center items-center absolute -top-7 w-1/2 left-1/2 transform -translate-x-1/2 pt-5">
                <CiSearch className='absolute left-3' />
                <input
                    ref={inputRef}
                    type="text"
                    className='bg-white shadow-lg p-5 flex flex-grow text-xs text-center text-black outline-none font-poppins'
                    placeholder=' O que deseja encontrar?'
                />
                <TiDelete
                    className='absolute right-10 text-zinc-400 cursor-pointer'
                    onClick={() => inputRef.current.value = ''}
                />
            </div>
        </div>
    )
}