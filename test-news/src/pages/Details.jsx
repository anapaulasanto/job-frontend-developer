import NavResults from '../components/templates/NavResults'
import Input from '../components/Input'


export default function Details() {
    return (
        <>
            <header className='flex flex-col justify-center pb-11 w-full gap-10'>
                <div >
                    <NavResults />
                </div>
                <div className='w-full '>
                    <Input />
                </div>
            </header>
            <section className="flex items-center flex-col gap-5 p-5 mt-5 bg-white">
                <h1>details</h1>
            </section>
        </>
    )
}