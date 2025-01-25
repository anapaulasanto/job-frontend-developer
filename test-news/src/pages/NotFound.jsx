import NavResults from "../components/templates/NavResults"
import Input from "../components/Input"
import { useContext, useEffect } from "react";
import { Context } from '../context/Context'
import NewsList from "../components/NewsList";

export default function NotFound() {
    const { news, handleView } = useContext(Context);

    useEffect(() => {
        handleView()
    }, [handleView])

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
            <section className="flex flex-col items-center gap-5">
                <p className="w-96 text-center text-sm font-roboto-condensed content-color pt-6">Não foi encontrado resultado com o termo pesquisado.
                    Talvez você possa gostar da nossa sugestão de notícias </p>
                <NewsList news={news} texto="Sugestão de notícias" />
            </section>
        </>
    )
}