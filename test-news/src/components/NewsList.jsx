export default function NewsList({ texto }) {
    return (
        <div className='bg-white w-full pt-17'>
            <div className='flex flex-col w-10/12 gap-4 justify-center items-center mx-auto '>
                <div className='flex font-poppins self-start items-center gap-4 mt-14' >
                    <h3 className='uppercase font-extrabold'>{texto}</h3>
                    <p className='content-color text-sm font-poppins'>Atualizado há 30 minutos</p>
                </div>
            </div>
        </div>
    )
}