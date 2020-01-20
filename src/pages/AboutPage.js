import React from 'react';

function AboutPage(props) {
    return (
        <div className="section">
          <div className="about-me-wrapper">
            <div className="about-me-content">
              <div className="about-me-title">HI, I'm</div>
              <div className="about-me-name">
                Wendy Wong
                <span className="about-me-name-decoration"></span>
              </div>
              <div className="about-me-info line-left line-bottom">
              A software developer and engineer based in <span>Stockholm, Sweden</span>.
              </div>
              <div className="about-me-info line-right line-bottom">
              I'm curious and enjoy solving complex problems. 
              When I'm not coding,
              you'll find me in the kitchen cooking or eating.
              </div>
              <div className="about-me-info line-left line-bottom">
              I taught <span>Computer Science</span> and <span>Graphics Programming</span> for years.
              </div>
              <div className="about-me-info line-right line-bottom">
              I have a few years of experience working on mission critical financial messaging 
              infrastructure and distributed messaging system.
              My favourite language is <span>C++</span>.
              </div>
          </div>
          </div>
      </div>
    )
}

export default AboutPage;