import { useEffect } from 'react'
import "./HomePage.css"

import Typewriter from 'typewriter-effect';

import { Link } from 'react-router-dom';


function HomePage(){
    return(
        <>
            <div className="homePanel">
                <h1>Hi there,</h1>
                <h2>I'm Michael Yang</h2>
                <Typewriter
                    options={{
                        strings: ["Web developer", "Game developer", "Full-stack developer", "Badminton player", "Gamer"],
                        autoStart: true,
                        loop: true,
                        delay:75,
                        pauseFor: 3000,
                }}/>
                
            </div>
            <a className="a"><Link to='/aboutme'>About me</Link></a>
        </>
    )
}

export default HomePage