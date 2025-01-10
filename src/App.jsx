import { useEffect, useState } from 'react';
import { Application } from 'https://unpkg.com/@splinetool/runtime@1.3.1/build/runtime.js';
import logo from '/img/logo.svg'
import loading from '/img/loading.svg'
import 'hamburgers/dist/hamburgers.min.css';
import './App.css';
import DevSection from './components/DevSection'
import DesSection from './components/DesSection'

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Contact from './components/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';


gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);

    app.load('https://prod.spline.design/X72BKNI5K1sOZpv7/scene.splinecode')
      .then(() => {
        setIsLoaded(true);
        setTimeout(() => setShowContent(true), 500);

        // TEXTO HEADER

       

        // Limpia las animaciones previas
        gsap.globalTimeline.clear();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        gsap.to("#static-text", {
          opacity: 0,
          scrollTrigger: {
            trigger: "#header",
            start: "center center",
            end: "+=200 center",
            scrub: true,
          },
        });

        const planet = app.findObjectByName("PlanetContainer");

        if (!isMobile) {
          gsap.to(planet.scale, { x: 0.7, y: 0.7, z: 0.7 }, 0);

          const timeline1 = gsap.timeline({
            scrollTrigger: {
              trigger: "#cont-dev",
              start: "top center",
              end: "bottom bottom",
              scrub: true,
            },
          })
            .to(planet.scale, { x: 1.5, y: 1.5, z: 1.5 }, 0)
            .to(planet.position, { x: -400, y: -50 }, 0)
            .to(planet.rotation, { y: -1.5 }, 0);
        }

        if (isMobile) {
          gsap.set(planet.scale, { x: 0.6, y: 0.6, z: 0.6 }, 0);
        }

        const timeline2 = gsap.timeline({
          scrollTrigger: {
            trigger: "#cont-des",
            start: "top center",
            end: "bottom bottom",
            scrub: true,
          },
        })
          .to(planet.rotation, { y: 1.5 }, 0);
      });

    return () => {
      gsap.globalTimeline.clear(); // Limpia todas las animaciones activas
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Limpia los triggers previos
    };
  }, [isMobile]);


  return (
    <>
      <div className={` ${isMobile ? "absolute" : "fixed" }  w-full h-screen top-0 z-30`}>

        {!isLoaded && (
          <div className="loader">
            <div className="spinner w-full h-screen flex justify-center">
              <img src={loading} className='loading' alt="loading" />
            </div>
          </div>
        )}


        <canvas
          id="canvas3d"
          className={`canvas ${showContent ? 'show' : ''}`}
        ></canvas>

      </div>

      <nav className='w-full flex items-center justify-between px-10 py-5 fixed z-30'>
        <a href="Inicio">
          <img className='logo' src={logo} alt="Logo" />
        </a>
        <button
          className={`relative z-50 hamburger hamburger--slider ${isActive ? 'is-active' : ''}`}
          type="button"
          onClick={() => setIsActive(!isActive)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="`bar fixed min-w-[200px] w-3/5 lg:w-3/12 h-screen background z-40 flex flex-col justify-center items-center gap-10 bg-emerald-800 transition-all duration-500 top-0 rounded-tl-[2rem] rounded-bl-[2rem]" style={{ right: isActive ? '0' : '-100%' }}>
          <a className='btn-bar' href="#header">Inicio</a>
          <a className='btn-bar' href="#cont-dev">Developer</a>
          <a className='btn-bar' href="#cont-des">Design</a>
          <a className='btn-bar' href="#contact">Contact</a>
        </div>
      </nav>

      <section className='header' id='header'>

        <div className='text-center mb-40'>
          <div className='static-text w-full' id='static-text'>
            <h1 className='font-bold' >Hola, soy <span className='green'> Mario Sepúlveda</span></h1>
            <h3 className='text-2xl mt-5 font-light text-slate-500'>Frontend developer - UI designer</h3>
          </div>

        </div>
      </section>


      <section id='cont-dev' className='flex items-center container mx-auto p-10 h-full min-h-screen max-h-none' >
        <div id='dev-section' className='grid grid-cols-2 dev-section'>
          <DevSection />
        </div>
      </section>


      <section id='cont-des' className='flex items-center container mx-auto p-10 h-full min-h-screen max-h-none' >
        <div id='des-section' className='grid grid-cols-2 des-section' >
          <DesSection />
        </div>
      </section>


      <section id='contact' className='relative h-full min-h-screen max-h-none z-10 p-10 bg-[#072C51] flex items-center'>
        <div className="container mx-auto align-middle">
          <div className='grid grid-cols-2 des-section py-20 px-5 lg:py-0' >
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;