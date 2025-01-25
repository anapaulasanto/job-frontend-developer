import Header from "../components/Header";
import Input from "../components/Input";
import NewsList from "../components/NewsList";
import Logo from "../components/templates/Logo";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";

export default function News() {
    const { news, handleView } = useContext(Context);

    return (
        <div className="flex flex-col justify-center items-center pb-11">
            <Logo />
            <Header />
            <Input />
            <section>
                <NewsList texto="últimas notícias" className='pt-11' />
            </section>
        </div>
    )
}