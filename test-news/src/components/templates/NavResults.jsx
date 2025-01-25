import Logo from '../templates/Logo'
import { FaArrowLeft } from "react-icons/fa6";

export default function NavResults() {
    return (
        <div className="flex items-center w-full ">
            <div className="flex items-center absolute">
                <a className="flex items-center " href="/">
                    <div className="pl-5">
                        <FaArrowLeft />
                    </div>
                    <span className="font-poppins font-bold text-sm ml-1">Home</span>
                </a>
            </div>
            <div className="mx-auto">
                <Logo />
            </div>
        </div>
    )
}