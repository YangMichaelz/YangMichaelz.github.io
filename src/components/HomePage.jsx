import { useEffect } from 'react'
import "./HomePage.css"

import Typewriter from 'typewriter-effect';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

import { Link } from 'react-router-dom';


function HomePage(){    
    function scrollToTop(){
        window.scrollTo(0,0);
    }
    useGSAP(()=>{
        gsap.from('.intro', {x: "-20%", opacity: 0, duration: 1.5, ease: "power4.out"});
        gsap.from('.name', {delay:0.5, x: "20%", opacity: 0, duration: 3, ease: "power3.out"});
        gsap.from('.autoTyper', {delay:1,y: "200%", opacity: 0, duration: 2, ease: "power3.out"});
        gsap.from('.button', {delay:1.5,y: "400%", duration: 3, opacity:0, ease: "expo.out"});
        gsap.set('body', {overflow: 'hidden' });
    });
    useEffect(()=>{
        scrollToTop();
    })
    return(
        <>
            <div className="homePanel">
                <h1 className='intro'>Hi there,</h1>
                <h2 className='name'>I'm Michael Yang</h2>
                <div className='autoTyper'>
                    <Typewriter
                        options={{
                            strings: ["Web developer", "Game developer", "Full-stack developer", "Badminton player", "Gamer"],
                            autoStart: true,
                            loop: true,
                            delay:75,
                            pauseFor: 3000,
                    }}/>
                </div>
                
            </div>
            <div className="button">
                <a className="a"><Link to='/aboutme'>About me</Link></a>
            </div>
            
        </>
    )
}

export default HomePage