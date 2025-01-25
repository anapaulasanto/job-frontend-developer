import Header from "../components/Header";
import Input from "../components/Input";
import NewsList from "../components/NewsList";
import Logo from "../components/templates/Logo";

export default function News() {
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