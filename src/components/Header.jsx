import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">WorkHub</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </header>
  );
};

export default Header;
