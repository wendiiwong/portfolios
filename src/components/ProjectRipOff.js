import React from 'react';

const title = "Rip-Off";
const contents = [
    {
        id: 1,
        subheading: null,
        subcontent:
            "Rip-Off is one of the shooting arcade game released in 1980. " + 
            "In this project, the '\"'Evolved'\"' version of Rip-Off is reproduced " +
            "on multiple platforms including PC, Game Cube, and PSP; it is developed " +
            "purely in C++ with OpenGL. " +
            "The game comes in single player and multiplayer mode, " +
            "with the option to use a game controller or keyboard as input on PC.",
        videosrc: null
    },
    {
        id: 2,
        subheading: 'Gameplay',
        subcontent:
            "The main goal of this game is to protect fuel canisters from invading pirate ships. " +
            "All ships (both enemies and players) are armed with weapon to attack each other. " +
            "Pirate ships are armed with short-range lasers, while player ships with cannon. " +
            "A rare and powerful '\"'smart bomb'\"' can be acquired by the player to destroy " +
            "all the enemies on the current scene.",
        videosrc: null
    },
    {
        id: 3,
        subheading: 'Cross-platform development',
        subcontent:
            "The game is first developed on PC, and later ported to both PSP and Game Cube.",
        videosrc: "https://www.youtube.com/embed/0A3AUFjPenU" 
    },
    {
        id: 4,
        subheading: 'NVIDIA 3D glasses',
        subcontent:
            "The '\"'3D glasses'\"' version of Rip-Off is developed based on stereoscopic 3D technology " +
            // eslint-disable-next-line
            "to help the University'\''s research project for Lazy Eye (Amblyopia) treatment in children. " +
            "The idea is to show different images to the lazy eye and normal eye, " +
            "in order to train the eye to relearn how it sees. " +
            "The whole treatment is done by playing '\"'Rip-Off'\"' game using NVIDIA 3D glasses. " +
            "The development is done on NVidia Quadro graphics card with quad buffering support.",
        videosrc: null
    }
];

function ProjectHeading(props) {

    const title = props.title;

    return (
        <div className="heading-wrapper bg-dark">
            <div className="heading">
                <h1 className="heading-title">{title}</h1>
            </div>
        </div>
    );
}

function ProjectSubHeading(props) {

    const subheading = props.subheading;

    return (
        <div className="subheading">
            <h2 className="subheading-heading">{subheading}</h2>
        </div>
    );
}

function ProjectVideo(props) {
    return (
        <div>
            <br/>
            <iframe
            title={props.title}
            width="560" 
            height="315" 
            src={props.videosrc}
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen />
        </div> 
    );
}

function ProjectSubContent(props) {

    const subcontent = props.subcontent;
    const videosrc = props.videosrc;
    const title = props.title;

    let video = null;

    if (videosrc !== null) {
        video = <ProjectVideo videosrc={videosrc} title={title} />
    }

    return (
        <div>
            <p>{subcontent}</p>
            {video}
        </div>
    );
}

function ProjectContent(props) {

    let content = null;

    content = (
        <div>
            {
                props.contents.map(subcontent => (
                    <div className="content-wrapper" key={subcontent.id}>
                        <ProjectSubHeading 
                            subheading={subcontent.subheading}
                        />
                        <ProjectSubContent 
                            subcontent={subcontent.subcontent}
                            videosrc={subcontent.videosrc}
                            title={subcontent.id}
                        />
                    </div>
                ))
            }
        </div>
    );

    return (
        content
    );
}

function ProjectRipOff(props) {
    return (
        <main>
            <ProjectHeading title={title}/>
            <ProjectContent contents={contents} />
        </main>
    );
}

export default ProjectRipOff;