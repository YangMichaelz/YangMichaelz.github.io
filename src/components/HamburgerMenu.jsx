import Hamburger from "hamburger-react"
import { useState } from "react"
import "./HamburgerMenu.css"
import Resume from "../assets/Resume.pdf"
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
                <li><a href='/'>Home</a></li>
                <li><a href='/aboutme'>About me</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href={Resume} target='_blank'>Resume</a></li>
            </div> : <></>}
        </div>
    )


}

export default HamburgerMenu