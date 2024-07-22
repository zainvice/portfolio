import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './sidebar';
const Header = (props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  
    return (
        <div className='flex justify-between mx-10 mt-5'>
            <Sidebar onClose={toggleSidebar} isSidebarOpen={isSidebarOpen}/>
            <div>
                <a href='/' className='text-[#02B5DC] font-bold text-2xl hover:animate-wiggle'>Zane &copy;</a>
                <p className='text-[12px] font-bold text-[#02B5DC]'>A Full Stack Designer</p>  
            </div>
            <div className='text-[14px] mt-2 lg:block hidden md:block'>
                <a href='/' className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>Home</a>
                <a href="/services" className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>Services</a>
                {/* <a href="/portfolio" className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>Portfolio</a> */}
                <a href="/about" className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>About Me</a>
            </div>
            <div className="flex flex-col homes w-5 h-5 mt-4 items-end" onClick={toggleSidebar}>
              <div className="bg-black h-[2px] rounded w-full relative">
               
              </div>
              <div className="bg-black h-[2px] rounded w-1/2 mt-1"></div>
            </div>
            
        </div>
    );
}

export default Header;