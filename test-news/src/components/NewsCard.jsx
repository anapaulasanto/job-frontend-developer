import img from '../assets/Author.png'
import { formatDate } from '../utils/shared/Date'
import { useNavigate } from "react-router-dom";
import readCount from '../utils/readCount'

export default function NewsCard({ recentNews }) {
    const navigate = useNavigate();

    function newDetails(item) {     
        try {
            readCount(item, navigate);
        } catch (err) {
            console.log('Não foi pro readCount', err);
        }
    }

    return (
        <div className='flex flex-col gap-10 justify-center items-center'>
            {recentNews.map((item) => (
                <div className='flex self-start items-center gap-4 cursor-pointer w-11/12'  key={item.title} onClick={() => newDetails(item)}>
                    <div className='w-2/5'>
                        <img className='rounded-md h-60 w-full object-cover mx-auto' src={item.urlToImage} alt={item.title} />
                    </div>
                    <div className='flex flex-col gap-2 self-start w-full'>
                        <p className='uppercase source-color font-bold text-xs font-roboto-condensed'>{item.source.name}</p>
                        <h1 className='w-2/3 title-color font-playfair text-2xl font-bold hover:text-gray-800'>{item.title}</h1>
                        <p className='w-3/5 font-roboto-condensed content-color text-sm'>{item.description}</p>
                        <div className='flex flex-grow gap-2 items-center w-2/3'>
                            {item.author ? (
                                <img className='w-8 rounded-full' src={img} alt="Author" />
                            ) : (
                                <p></p>
                            )}
                            <h3 className='text-xs font-bold font-poppins  content-color'>{item.author}</h3>
                            <p className='text-xs content-color font-poppins'>{formatDate(item.publishedAt)}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}