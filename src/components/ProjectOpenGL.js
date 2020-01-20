import React from 'react';

const title = "Real-Time Graphics";
const contents = [
    {
        id: 1,
        subheading: null,
        subcontent:
            "This is a real time graphics rendering project developed in year 2009 with C++ and OpenGL. " +
            "All the visual effects are occur within a transparent box, and visualised via both pre-determined " +
            "script and discrete key input from the user. " +
            "It demonstrates a number of mathematic algorithms and techniques used in Graphics Programming. ",
        videosrc: null
    },
    {
        id: 2,
        subheading: 'Rendering',
        subcontent:
            "The first part of the project is to load multiple objects from the object files " +
            "and render them on scene. All objects are animated following specific animation paths " +
            "and available in difference mode (wireframe, flat shaded, smooth shaded, Phong shaded, textured). " +
            // eslint-disable-next-line
            "All objects'\'' related information are loaded from the script files, such as " +
            "size, material characteristics, and animation path.",
        videosrc: "https://www.youtube.com/embed/hJTmJ-SdmJE"
    },
    {
        id: 3,
        subheading: 'Spotlights',
        subcontent:
            // eslint-disable-next-line
            "There are 8 spotlights situated at the box'\''s corners. The lights are animated too, " +
            "being able to point to a particular object and follow it throughout the scene. " +
            "There is also an option to toggle lightbeam mode to have a clearer idea on " +
            "how the spotlight works.",
        videosrc: "https://www.youtube.com/embed/sQ9NUm7Opp4" 
    },
    {
        id: 4,
        subheading: 'Glow ball & Particle ball',
        subcontent:
            "A special animated object called \"glow ball\" is included in the scene too. " +
            "With 6 colored spotlights evenly distributed over a spherical surface, it is able to " +
            "illuminate all other objects in the box. " +
            "Another special object is called \"particle ball\", with 6 particle emitters attached. " +
            "There are two main types of particle implemented (Type A & Type B). Type A will fade out " +
            "and type B will leave a scorch mark on the wall on impact, and fade out over time.",
        videosrc: "https://www.youtube.com/embed/_ZGNl306C78"
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
        video = <ProjectVideo videosrc={videosrc} title={title}/>
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
            <ProjectContent contents={contents}/>
        </main>
    );
}

export default ProjectRipOff;