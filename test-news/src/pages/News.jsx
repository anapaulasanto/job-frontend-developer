import Header from "../components/Header";
import Input from "../components/Input";
import Logo from "../components/templates/Logo";

export default function News() {
    return (
        <div className="flex flex-col justify-center items-center pb-11">
            <Logo />
            <Header />
            <Input />
        </div>
    )
}