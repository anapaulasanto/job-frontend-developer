import img from '../assets/Author.png'

export default function NewsCard({ recentNews }) {
    return (
        <div className='flex flex-col gap-10 justify-center items-center '>
            {recentNews.map((item) => (
                <div className='flex self-start items-center gap-4 cursor-pointer' key={item.title} onClick={() => newDetails(item)}>
                    <div className='min-w-80'>
                        <img className='rounded-md h-60 object-cover mx-auto' src={item.urlToImage} alt={item.title} />
                    </div>
                    <div className='flex flex-col gap-1 self-start w-full'>
                        <p className='uppercase text-teal-600 font-bold text-xs font-roboto-condensed'>{item.source.name}</p>
                        <h1 className='w-2/3 text-2xl font-bold hover:text-gray-800'>{item.title}</h1>
                        <p className='w-3/5 font-roboto-condensed text-gray-500 text-sm'>{item.description}</p>
                        <div className='flex flex-grow gap-2 items-center w-2/3'>
                            <img className='w-8 rounded-full' src={img} alt="" />
                            <h3 className='text-xs font-bold font-poppins  text-slate-600'>{item.author}</h3>
                            <p className='text-xs text-slate-600 font-poppins'>(item.publishedAt)</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}