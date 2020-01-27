import React from 'react';

function SectionFullImage() {
  const heroImgStyle = {
    backgroundImage: 'url("https://github.com/wendiiwong/portfolios/blob/gh-pages/hero-banner.jpg?raw=true")'
  };

  return (
    <div className="section-full-image" style={heroImgStyle}></div>
  );
}

function SectionHeroBanner() {
  return (
    <div className="bg-dark">
      <SectionFullImage />
    </div>
  );

}

export default SectionHeroBanner;