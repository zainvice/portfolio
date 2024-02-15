import React from 'react';

const Sidebar = ({ onClose, isSidebarOpen }) => {
    return (
      <div className={`fixed rounded-l-[20px] h-full bg-[#02B5DC] w-[250px] top-0 right-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={onClose} className="absolute top-4 left-4 text-gray-200 hover:font-bold hover:text-white duration-300">X</button>
         <div className='flex flex-col mt-20 ml-5'>
                <a href='/' className='m-5 cursor-pointer text-gray-100 hover:text-white hover:font-bold ease-in-out duration-300'>Home</a>
                <a href="/services" className='m-5 cursor-pointer text-gray-100 hover:text-white hover:font-bold ease-in-out duration-300'>Services</a>
                <a href="/portfolio" className='m-5 cursor-pointer text-gray-100 hover:text-white hover:font-bold ease-in-out duration-300'>Portfolio</a>
                <a href="/about" className='m-5 cursor-pointer text-gray-100 hover:text-white hover:font-bold ease-in-out duration-300'>About Me</a>
         </div>
         <div className='my-40'>
            <p className='text-[25px] ml-10 font-bold text-white'>Zane &copy;</p>
            <p className='text-[12px] ml-10 font-bold text-white'>A Full Stack Designer</p>
         </div>
      </div>
    );
};

export default Sidebar;