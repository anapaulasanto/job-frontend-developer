import Header from "../components/Header";
import Input from "../components/Input";
import NewsList from "../components/NewsList";
import Logo from "../components/templates/Logo";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function News() {
    const { news, handleView, hasSearchResults } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        handleView()
    }, [])

    useEffect(() => {
        if (!hasSearchResults) {
            navigate("/notFound");
        }
    }, [hasSearchResults, navigate]);

    return (
        <div className="flex flex-col justify-center items-center pb-11">
            <Logo />
            <Header />
            <Input />
            <section>
                {hasSearchResults && (
                    <NewsList news={news} texto="últimas notícias" className='pt-11' />
                )}
            </section>
        </div>
    )
}