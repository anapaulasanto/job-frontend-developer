import NavResults from '../components/templates/NavResults'
import Input from '../components/Input'
import NewsCardDetails from '../components/NewsCardDetails'
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Context } from '../context/Context';

export default function Details() {
    const location = useLocation();
    const newsDetails = location.state || {};
    const { hasSearchResults } = useContext(Context);

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
                {hasSearchResults && (
                    <NewsCardDetails newsDetails={newsDetails} />
                )}
            </section>
        </>
    )
}