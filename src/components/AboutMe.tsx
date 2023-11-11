import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section className="section-with-background text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 neon-pink">About Me</h2>
        <p className="text-lg neon-blue">
          Hello! I'm [Your Name], a passionate software engineer with a love for 90s internet aesthetics.
        </p>
        <img src="/images/pixel-computer.png" alt="Retro Computer Icon" className="mt-4 w-16 h-16 mx-auto block" />
      </div>
    </section>
  );
};

export default AboutMe;
