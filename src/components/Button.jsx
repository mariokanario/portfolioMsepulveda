import React from 'react'

const Button = ({ text, icon, route, download }) => {
    return (
        <a href={route} target='_blank' donwload={download && "hoja de vida MARIO.pdf"}>
            <button className='relative flex items-center justify-center overflow-hidden gap-4 px-8 py-6 border-white   text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:shadow-blue-600 hover:before:h-60 hover:before:w-60'>
                <span className='relative flex  items-center justify-center gap-4'>
                    {icon}

                    {text}
                </span>
            </button>
        </a>
    )
}

export default Button