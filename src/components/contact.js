import React from 'react';

const Contact = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-[40px] mb-6 text-center home"> <span className="text-[#02B5DC]">CONNECT</span> WITH ME</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02B5DC]"
              type="text"
              id="name"
              name="name"
              placeholder='NICKNAME WORKS'
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02B5DC]"
              type="email"
              id="email"
              name="email"
              placeholder='VALID ONE PLEASE'
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02B5DC]"
              id="message"
              name="message"
              rows="4"
              placeholder='WHAT WOULD YOU LIKE TO DISCUSS!'
              required
            ></textarea>
          </div>
          <div className="text-center">
          <button 
            className=" bg-[#02B5DC] animate-bounce hover:animate-none text-white p-3 text-sm rounded-full border-2 border-[#02B5DC] hover:bg-white hover:text-[#02B5DC] hover:font-bold duration-300">
            Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
