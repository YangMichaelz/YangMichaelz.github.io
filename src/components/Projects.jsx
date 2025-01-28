import "./Projects.css"
import AIskImage from "../assets/AIsk.png"
import stableCascadeImage from "../assets/stablecascade.png"
import dungeonGameImage from "../assets/dungeonGame.png"
import bonniesWrathImage from "../assets/bonniesWrath.png"
import unityDungeonGameImage from "../assets/unityDungeonGame.png"
import unityFPSGameImage from "../assets/FPS.png"
import ProjectCard from "./ProjectCard.jsx"
import { useRef } from "react";



function Projects(){
    return(
        <>
            <div className="projectPanel">
                <h1>My Projects</h1>
                <div id="projectContainer">
                    <ProjectCard
                        title={"AIsk"}
                        image={AIskImage}
                        description={"A MERN-stack web application chatbot that uses Retrival-Augmented Generation (RAG) to generate accurate, context enhanced responses. Built with Tavily, LangChain, and Pinecone's vector DB."}
                        url={"https://github.com/YangMichaelz/AIsk-RAG-Healthcare-Chat-Bot"}
                        website={"Github"}
                    />
                    <ProjectCard
                        title={"Stable Cascade Discord Bot"}
                        image={stableCascadeImage}
                        description={"A Discord bot that interfaces with comfyUI, allowing users to generate high-quality images across different styles. Built with Python and socket."}
                        url={"https://github.com/YangMichaelz/stable-cascade-discord-bot"}
                        website={"Github"}
                    />
                    <ProjectCard
                        title={"2D Dungeon Game"}
                        image={dungeonGameImage}
                        description={"A 2D dungeon game featuring 6 levels and a variety of enemies, weapons, and a boss. Made with Java and Java Swing."}
                        url={"https://github.com/YangMichaelz/2D-Dungeon-Game"}
                        website={"Github"}
                    />
                    <ProjectCard
                        title={"3D Dungeon Game"}
                        image={unityDungeonGameImage}
                        description={"A 3D dungeon game made in a week for a game jam. It features 5 enemies, 7 different weapons, and a giant map. Built with Unity Engine and C#"}
                        url={"https://t3mplar.itch.io/3d-dungeon-game"}
                        website={"Itch.io"}
                    />
                    <ProjectCard
                        title={"Failsafe"}
                        image={unityFPSGameImage}
                        description={"A first-person shooter wave based survival game made in 3 days for a game jam. It features infinite waves of enemies, weapon upgrades, and 3 different enemy types. Made with Unity Engine and C#"}
                        url={"https://t3mplar.itch.io/failsafe"}
                        website={"Itch.io"}
                    />
                    <ProjectCard
                        title={"Bonnie's Wrath"}
                        image={bonniesWrathImage}
                        description={"A horror fan-game based on the Five Nights at Freddy's franchise. Made with Unity Engine and C#"}
                        url={"https://t3mplar.itch.io/bonnies-wrath"}
                        website={"Itch.io"}
                    />
                </div>
            </div>
            
        </>
    )
}

export default Projects