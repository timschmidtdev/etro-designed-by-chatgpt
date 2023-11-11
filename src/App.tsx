import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
