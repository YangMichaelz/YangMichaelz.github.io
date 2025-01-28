import Hamburger from "hamburger-react"
import { useState } from "react"
import "./HamburgerMenu.css"
import Resume from "../assets/Resume.pdf"
import { Link } from 'react-router-dom';
function HamburgerMenu(){
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <div class="hamburger">
            <Hamburger
                size={34}
                toggle={setOpenMenu}
                toggled={openMenu} 
            />
            {openMenu ?  <div class="dropDownMenu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/aboutme'>About me</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><a href={Resume} target='_blank' rel="noopener noreferrer">Resume</a></li>
            </div> : <></>}
        </div>
    )


}

export default HamburgerMenu