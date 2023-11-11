import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="section-with-background neon-green text-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-lg neon-yellow">Feel free to reach out! Neon lights are always on.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" className="hover:text-yellow-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-yellow-300">LinkedIn</a>
          {/* Add more social media links as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
