import "./Projects.css"
import { useRef } from "react";
import React from "react";





function ProjectCard({title="", image, description="", url="", website=""}){
    const projectRef = useRef(null);

    function handleHover(e) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight } = currentTarget;
        const offsetLeft = currentTarget.getBoundingClientRect().left;
        const offsetTop = currentTarget.getBoundingClientRect().top;
      
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (20  / 2 - horizontal * 20 ).toFixed(2);
        const rotateY = (vertical * 20 - 20  / 2).toFixed(2);
        if(projectRef.current){
            projectRef.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
        }
        
      }
      function resetStyles(e) {
        if(projectRef.current){
            projectRef.current.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
        }
    }


    return(
        <article class="project" ref={projectRef} onMouseMove={handleHover} onMouseLeave={resetStyles}>
            <h2>{title}</h2>
            <img src={image}/>
            <p>{description}</p>
            <a target="_blank" href={url}>{website}</a>
        </article>
    )
}

export default ProjectCard