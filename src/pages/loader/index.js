import React from 'react';
import './Loader.css'; // Ensure you import the CSS file

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <h1 className="shining-text-big">Zane &copy;</h1>
      <h1 className="shining-text-small">A Full Stack Designer</h1>
    </div>
  );
};

export default Loader;
