import React from 'react'
import { FaGithub, FaBehance } from "react-icons/fa";
import Button from './Button';

const DevSection = () => {

    const skills = [
        {
            name: "html",
            image: "/img/skills/html.svg"
        },
        {
            name: "css",
            image: "/img/skills/css.svg"
        },
        {
            name: "javascript",
            image: "/img/skills/js.svg"
        },
        {
            name: "react",
            image: "/img/skills/react.svg"
        },
        {
            name: "bootstrap",
            image: "/img/skills/bootstrap.svg"
        },
        {
            name: "tailwind",
            image: "/img/skills/tailwind.svg"
        },
        {
            name: "wordpress",
            image: "/img/skills/wordpress.svg"
        },
    ]

    return (

        <div className='flex flex-col items-start gap-y-12 col-start-1 col-span-2 lg:col-start-2 lg:col-span-1 pt-40 lg:pt-0 '>

            <h2>Frontend developer</h2>
            <p>Mi pasión por crear experiencias digitales me llevó a explorar el mundo de la programación. Comencé a dar vida a mis diseños, aprendiendo lenguajes como HTML, CSS y JavaScript, y evolucionando hacia frameworks como React. Hoy en día, disfruto combinando mi creatividad con mis habilidades técnicas para desarrollar sitios web y aplicaciones interactivas y dinámicas.</p>
            <div className='skills-container flex flex-wrap gap-8'>
                {
                    skills.map((skill, index) => (
                        <figure className='skills text-center flex flex-col justify-between' key={index}>
                            <img src={skill.image} alt={skill.name} className='m-auto' />
                            <figcaption>{skill.name}</figcaption>
                        </figure>
                    ))
                }
            </div>

            <Button 
                text="Ver proyectos"
                icon={<FaGithub className='text-3xl' />}
                route="https://github.com/mariokanario"
            />

        </div>

    )
}

export default DevSection