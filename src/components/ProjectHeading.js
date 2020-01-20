import React from 'react';

function ProjectHeading(props) {

    const title = props.title;

    return (
            <div className="heading-wrapper bg-dark">
                <div className="heading">
                    <h1 className="heading-title">{title}</h1>
                </div>
            </div>
    )
}

export default ProjectHeading;