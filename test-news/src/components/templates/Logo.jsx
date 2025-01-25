import logo from '../../assets/Logo.png'

export default function Logo() {
    return (
        <div className='flex justify-center mx-auto p-3  '>
            <img className='w-2/3' src={logo} alt="" />
        </div>
    )
}