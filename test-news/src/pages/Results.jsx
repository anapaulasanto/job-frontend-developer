import { useContext, useEffect } from "react";
import { Context } from '../context/Context'
import NavResults from "../components/templates/NavResults";
import Input from "../components/Input";
import NewsList from "../components/NewsList";
import { useNavigate } from "react-router-dom";

export default function Results() {
    const { news, hasSearchResults } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!hasSearchResults) {
            navigate("/notFound");
        }
    }, [hasSearchResults, navigate]);

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
            <section className="flex items-center flex-col gap-5 p-5">
                {hasSearchResults && (
                    <NewsList news={news} texto="O resultado da sua busca" />
                )}
            </section>
        </>
    );
}
