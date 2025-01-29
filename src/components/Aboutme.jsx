import { useEffect } from 'react'
import "./Aboutme.css"

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

function Aboutme(){

    function scrollToTop(){
        window.scrollTo(0,0);
    }
    useEffect(()=>{
        scrollToTop();
    })
    useGSAP(()=>{
        gsap.from('.title', {y: "200%", opacity: 0, duration: 1.5, ease: "power4.out"});
        gsap.from('.content', {delay:0.5, x: "-20%", opacity: 0, duration: 2.5, ease: "power3.out"});
        gsap.from('.techStack', {delay: 1.5, y: "100%", opacity: 0, duration: 2, ease: "power3.out"});
        gsap.set('body', { overflow: 'hidden' })
    });
    return(
        <>
            <div className="aboutMePanel">
                <h1 className="title">About me</h1>
                <div className="aboutMeInnerPanel content">
                    <p1>I am a second year student studying Computer Science at Carleton University.
                        In my free time I enjoy playing sports like Badminton and video games. Some of my hobbies include
                        game development, and playing the piano and violin.
                    </p1>
                </div>

            </div>
            <div className="techStack">
            <h2 class="TechStackTitle">My tech stack:</h2>
            <div className="techStackOuterPanel">
                
                    <div className="techStackPanel">
                        <a href='https://www.java.com/en/' target="_blank" className='techStackElement'>Java</a>
                        <a href='https://www.python.org/' target="_blank" className='techStackElement'>Python</a>
                        <a href='https://en.wikipedia.org/wiki/C++' target="_blank" className='techStackElement'>C++</a>
                        <a href='https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' target="_blank" className='techStackElement'>C#</a>
                        <a href='https://en.wikipedia.org/wiki/C_(programming_language)' target="_blank" className='techStackElement'>C</a>
                        <a href='https://www.lua.org/' target="_blank" className='techStackElement'>Lua</a>
                        <a href='https://en.wikipedia.org/wiki/JavaScript' target="_blank" className='techStackElement'>JavaScript</a>
                        <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target="_blank" className='techStackElement'>HTML/CSS</a>
                    </div>
                    <div className="techStackPanel">
                        <a href='https://react.dev/' target="_blank" className='techStackElement'>React.js</a>
                        <a href='https://www.mongodb.com/' target="_blank" className='techStackElement'>MongoDB</a>
                        <a href='https://www.langchain.com/' target="_blank" className='techStackElement'>LangChain</a>
                        <a href='https://tailwindcss.com/' target="_blank" className='techStackElement'>TailwindCSS</a>
                        <a href='https://nodejs.org/en' target="_blank" className='techStackElement'>Node.js</a>
                        <a href='https://expressjs.com/' target="_blank" className='techStackElement'>Express.js</a>
                        <a href='https://vite.dev/' target="_blank" className='techStackElement'>Vite</a>
                        <a href='https://flask.palletsprojects.com/en/stable/' target="_blank" className='techStackElement'>Flask</a>
                        <a href='https://git-scm.com/' target="_blank" className='techStackElement'>Git</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutme