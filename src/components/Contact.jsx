import React from 'react'
import { BiLogoGmail } from "react-icons/bi";
import { IoMdDownload, IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import Button from './Button';

const Contact = () => {
    return (
        <>
            <div data-aos="fade-left" className='flex flex-col justify-center items-center gap-y-6 col-span-2 lg:col-span-1 text-center order-2 lg:order-1 mt-10 lg:mt-0'>
                <h3 className='text-[2rem] lg:text-[3rem] font-extralight italic'>
                    Un 
                    <span className='text-emerald-600'> diseñador </span> 
                    que ama el 
                    <span className='text-cyan-600'> desarrollo </span>
                    front end
                    </h3>
                <hr className='w-full' />
                <p className='text-[25px] '>Escríbeme</p>
                <div className='flex gap-6'>
                    <a href="mailto:sepulvedamario87@gmail.com?Subject=Hola%20te%20escribo%20desde%20el%20sitio%20msepulveda.com" target='_blank'>
                        <div className='overflow-hidden w-[65px] h-[65px] bg-white rounded-full flex justify-center items-center text-slate-950 text-[30px] relative shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-300 before:ease-out hover:shadow-blue-600 hover:before:h-[63px] hover:before:w-[63px]'>
                            <BiLogoGmail className='z-10' />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/m-sepu/" target='_blank'>
                        <div className='overflow-hidden w-[65px] h-[65px] bg-white rounded-full flex justify-center items-center text-slate-950 text-[30px] relative shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-300 before:ease-out hover:shadow-blue-600 hover:before:h-[63px] hover:before:w-[63px]'>
                            <FaLinkedinIn className='z-10' />
                        </div>
                    </a>
                    <a href="https://wa.me/573005052513/" target='_blank'>
                        <div className='overflow-hidden w-[65px] h-[65px] bg-white rounded-full flex justify-center items-center text-slate-950 text-[30px] relative shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-600 before:duration-300 before:ease-out hover:shadow-blue-600 hover:before:h-[63px] hover:before:w-[63px]'>
                            <IoLogoWhatsapp className='z-10' />
                        </div>
                    </a>
                </div>
                <Button
                    text="Descargar CV"
                    icon={<IoMdDownload className='text-3xl' />}
                    route={"/pdf/hoja de vida MARIO.pdf"}
                    download={true}
                />
            </div>
            <div data-aos="fade-right" className='flex flex-col items-start gap-y-12 col-span-2 lg:col-span-1 order-1 lg:order-2'>
                <figure className='mx-auto'>
                    <img src="/img/profile.jpg" alt="Picture profile" className='rounded-[20px] w-2/3 lg:w-3/4 mx-auto' />
                </figure>
            </div>
        </>
    )
}

export default Contact