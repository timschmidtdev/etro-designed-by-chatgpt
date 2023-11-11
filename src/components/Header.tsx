import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-purple-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:text-yellow-300">Home</li>
            <li className="hover:text-yellow-300">About</li>
            <li className="hover:text-yellow-300">Skills</li>
            <li className="hover:text-yellow-300">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
