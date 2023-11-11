import React from 'react';

const Skills: React.FC = () => {
  return (
    <section className="bg-yellow-400 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <ul className="list-disc">
          <li className="mb-2">React.js</li>
          <li className="mb-2">TypeScript</li>
          <li className="mb-2">Tailwind CSS</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
