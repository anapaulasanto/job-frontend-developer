import img from '../assets/Author.png'
import { formatDate } from '../utils/shared/Date'

export default function NewsCardDetails({ newsDetails }) {
    return (
        <div className="flex flex-col items-center gap-5 p-5">
            <p className='uppercase source-color font-black text-sm font-roboto-condensed'>{newsDetails.source?.name ?? "Fonte desconhecida"}</p>
            <h1 className='w-2/3 text-5xl font-bold text-gray-900 text-center'>{newsDetails.title}</h1>
            <div className='flex flex-grow gap-2 items-center w-2/3 justify-center pb-3'>
                {newsDetails.author ? (
                    <img className='w-8 rounded-full' src={img} alt="Author" />
                ) : (
                    <p></p>
                )}
                <h3 className='text-xs font-bold font-poppins content-color'>{newsDetails.author ?? ""}</h3>
                <p className='text-xs content-color font-poppins'>{formatDate(newsDetails.publishedAt)}</p>
            </div>
            <img src={newsDetails.urlToImage} alt={newsDetails.title} className='h-96 object-cover rounded-md' />

            <p className='content-color text-sm font-poppins w-1/2 text-center'>{newsDetails.description}</p>
            <a href={newsDetails.url} target='_blank' rel='noreferrer' className='text-zinc-400 text-sm font-sans'>Leia mais</a>
        </div>
    )
}