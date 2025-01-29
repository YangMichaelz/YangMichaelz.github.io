import { useState } from 'react'
import "./Header.css"
import Resume from "../assets/Resume.pdf"
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom'


function Header(){
    return(
        <div class="float">
            <div class="header">
                <h1 class="titlePage">MY</h1>
                <HamburgerMenu/>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutme'>About me</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><a href={Resume} target='_blank' rel="noopener noreferrer">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header