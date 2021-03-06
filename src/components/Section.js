import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function SectionContent(props) {
    const title = props.title;
    const description = props.description;
    const titleStyle = "section-title f-" + props.titleColor;
    const descriptionStyle = "section-description f-" + props.descriptionColor;

    return (
        <div className="section-content">
            <h1 className={titleStyle}>{title}</h1>
            <h2 className={descriptionStyle}>{description}</h2>
        </div>
    )
}

function TDD() {
    const SEIconText = <p><b>Test driven<br />development</b></p>;

    return (
        <div className="se-practice">
            <div className="se-icon-wrapper">
                <div className="se-icon">
                    <img src="https://github.com/wendiiwong/portfolios/blob/gh-pages/tdd.png?raw=true" alt="test driven dev"></img>
                </div>
            </div>
            <div className="se-icon-text">
                {SEIconText}
            </div>
        </div>
    )
}

function CI() {
    const SEIconText = <p><b>Continous<br />Integration</b></p>;

    return (
        <div className="se-practice">
            <div className="se-icon-wrapper">
                <div className="se-icon">
                    <img src="https://github.com/wendiiwong/portfolios/blob/gh-pages/CI.png?raw=true" alt="continous integration"></img>
                </div>
            </div>
            <div className="se-icon-text">
                {SEIconText}
            </div>
        </div>
    )
}

function Agile() {
    const SEIconText = <p><b>Agile<br />Environment</b></p>;

    return (
        <div className="se-practice">
            <div className="se-icon-wrapper">
                <div className="se-icon">
                    <img src="https://github.com/wendiiwong/portfolios/blob/gh-pages/agile.png?raw=true" alt="agile"></img>
                </div>
            </div>
            <div className="se-icon-text">
                {SEIconText}
            </div>
        </div>
    )
}

function CleanCode() {
    const SEIconText = <p><b>Clean<br />Code</b></p>;

    return (
        <div className="se-practice">
            <div className="se-icon-wrapper">
                <div className="se-icon">
                    <img src="https://github.com/wendiiwong/portfolios/blob/gh-pages/cleancode.png?raw=true" alt="clean code"></img>
                </div>
            </div>
            <div className="se-icon-text">
                {SEIconText}
            </div>
        </div>
    )
}

function SectionSoftwareEngineering() {
    const title = "Software Engineering Practice";
    const description = "- What I practice in order to deliver stable and elegant software. -";
    const titleColor = "white";
    const descriptionColor = "light-grey";

    return (
        <div className="section-wrapper">
            <SectionContent
                title={title}
                description={description}
                titleColor={titleColor}
                descriptionColor={descriptionColor}
            />
            <div className="se-practice-content">
                <TDD />
                <CI />
                <Agile />
                <CleanCode />
            </div>
        </div>
    );
}

function PortfolioItemContainerRipOff() {
    return (
        <div className="portfolio-item-container">
            <div className="portfolio-item">
            <div>
                <img src="https://github.com/wendiiwong/portfolios/blob/gh-pages/ripoff.png?raw=true" alt="ripoff"></img>
            </div>
            <Link to="/ripoff#ripoff-title">
                <div className="portfolio-item-meta">
                    <h4>Rip-Off</h4>
                    <p>Multiplayer flight shooting game on PSP.</p>
                </div>
            </Link>
            </div>
        </div >
    );
}

function PortfolioItemContainerGraphicsRendering() {
    return (
        <div className="portfolio-item-container">
            <div className="portfolio-item">
                <div>
                    <img src="https://github.com/wendiiwong/portfolios/blob/gh-pages/opengl.png?raw=true" alt="graphicsrendering"></img>
                </div>
                <Link to="/opengl#opengl-title">
                    <div className="portfolio-item-meta">
                        <h4>Real Time Graphics</h4>
                        <p>Graphics rendering project.</p>
                    </div>
                </Link>
            </div>
        </div >
    );
}
        
function SectionPortfolios() {
    const title = "Portfolios";
    const description = "- Check out some of my works. -";
    const titleColor = "";
    const descriptionColor = "f-dark-grey";

    const moreWorkButton = <Link to="/projects" className="button">More Works</Link>;

    return (
        <div className="section-wrapper">
            <SectionContent
                title={title}
                description={description}
                titleColor={titleColor}
                descriptionColor={descriptionColor}
            />
            <div className="spacer"></div>
            <div className="se-practice-content">
                <PortfolioItemContainerRipOff />
                <PortfolioItemContainerGraphicsRendering />
            </div>
            <div>
                {moreWorkButton}
            </div>
        </div>
    );
}

function Section() {

    return (
        <div>
            <div className="section bg-dark">
                <SectionSoftwareEngineering />
            </div>
            <div className="section">
                <SectionPortfolios />
            </div>
        </div>
    );

}

export default Section;