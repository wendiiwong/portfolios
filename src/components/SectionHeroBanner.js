import React from 'react';

function SectionFullImage() {
  const heroImgStyle = {
    backgroundImage: 'url("hero-banner.jpg")'
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