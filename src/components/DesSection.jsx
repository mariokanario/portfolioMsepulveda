import React from 'react'
import Button from './Button'
import { FaGithub, FaBehance } from "react-icons/fa";

const DesSection = () => {

    const skills = [
        {
            name: "figma",
            image: "/img/skills/figma.svg"
        },
        {
            name: "illustrator",
            image: "/img/skills/illustrator.svg"
        },
        {
            name: "photoshop",
            image: "/img/skills/photoshop.svg"
        },
        {
            name: "aftereffects",
            image: "/img/skills/aftereffects.svg"
        },
        {
            name: "harmony",
            image: "/img/skills/harmony.svg"
        },
        {
            name: "unity",
            image: "/img/skills/unity.svg"
        },
    ]

    return (
        <div className='flex flex-col items-start gap-y-12 col-start-1 col-span-2 lg:col-start-2 lg:col-span-1 pt-40 lg:pt-0  '>

            <h2>UI designer</h2>
            <p>Soy un diseñador UI/UX especializado en crear interfaces digitales únicas y personalizadas. Disfruto de cada etapa del proceso, desde la investigación hasta el desarrollo, poniendo especial atención en los detalles para garantizar resultados excepcionales tanto visual como funcionalmente.</p>
            <div className='skills-container grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {
                    skills.map((skill, index) => (
                        <figure className='skills text-center flex flex-col justify-start min-h-[120px]' key={index}>
                            <img src={skill.image} alt={skill.name} className='m-auto' />
                            <figcaption>{skill.name}</figcaption>
                        </figure>
                    ))
                }
            </div>
            <Button 
                text="Ver proyectos"
                icon={<FaBehance className='text-3xl' />}
                route="https://www.behance.net/msepulveda"
            />

        </div>
    )
}

export default DesSection