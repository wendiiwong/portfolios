import React from 'react';

import Section from '../components/Section';
import SectionHeroBanner from '../components/SectionHeroBanner';

function HomePage(props) {
  return (
    <main>
      <SectionHeroBanner />
      <Section />
    </main>
  );
}

export default HomePage;