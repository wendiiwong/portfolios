import React from 'react';
import { Link } from 'react-router-dom';

function Project(props) {
    return (
        <div className="section">
            <div className="project-wrapper">
                <div className="project-text">
                    <div className="project-title">
                        <h2><Link to={props.link}> {props.title} </Link></h2>
                    </div>
                    <div className="project-description">
                        {props.description}
                        <Link className="symbol" to={props.link}>&nbsp;&nbsp;&#x25b6;</Link>
                    </div>
                </div>
                <div className="project-img"><img src={props.img} alt={props.alt}></img></div>
            </div>
        </div>
    );
}

function ProjectHeader() {
    return (
        <div className="heading-wrapper bg-dark">
        <div className="heading">
          <h1 className="heading-title">Projects</h1>
          <div className="heading-subtitle-rule">
            <div className="heading-subtitle-parenthesis"></div>
            <div className="heading-subtitle">My playgrounds.</div>
            <div className="heading-subtitle-parenthesis"></div>
          </div>
        </div>
      </div>
    );
}

function ProjectsPage(props) {

    const ripOffDescription = "Rip-Off is one of the shooting arcade game released in 1980. In this project, the \"Evolved\" version of Rip-Off is reproduced on multiple platforms.";
    const ripOffLinkTo = "/ripoff";
    const ripOffImg = "ripoff.png";
    const ripOffImgAlt = "rip off";
    const openGLDescription =   
        "This is a graphics rendering project developed using C++ and OpenGL. " +
        "It demonstrates difference algorithms and techniques in graphics programming.";
    const openGLLinkTo = "/opengl";
    const openGLImg = "opengl.png";
    const openGLImgAlt = "graphics rendering";

    return (

        <main>
            <ProjectHeader />
            <div className="projects">
                <Project 
                    title="Rip Off" 
                    description={ripOffDescription} 
                    link={ripOffLinkTo}
                    img={ripOffImg}
                    alt={ripOffImgAlt}
                />
                <Project 
                    title="Real Time Graphics" 
                    description={openGLDescription} 
                    link={openGLLinkTo}
                    img={openGLImg}
                    alt={openGLImgAlt}
                />
            </div>
        </main>

    );
}

export default ProjectsPage;