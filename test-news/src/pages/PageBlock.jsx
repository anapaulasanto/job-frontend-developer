import img from '../assets/block.png'
import NavResults from "../components/templates/NavResults"
import { useLocation } from "react-router-dom";

export default function PageBlock() {
    const location = useLocation();
    const dataDetails = location.state

    return (
        <>
            <header className='flex flex-col justify-center pb-11 w-full gap-10'>
                <div >
                    <NavResults />
                </div>
            </header>
            <section className='h-screen flex flex-col items-center gap-9 bg-white w-full'>
                <img className='w-52 rounded-full' src={img} alt="Imagem de cachorro" />
                <div className='flex flex-col items-center gap-4'>
                    <span className='text-4xl  source-color font-bold '>Opss..</span>
                    <p className='text-center text-lg font-bold'>{dataDetails} </p>
                </div>
            </section>
        </>
    )
}