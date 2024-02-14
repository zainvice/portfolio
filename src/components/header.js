import React from 'react';

const Header = (props) => {
    
    return (
        <div className='flex justify-between mx-10 mt-5'>
            <div>
                <a href='/' className='text-[#02B5DC] font-bold text-2xl'>Zane</a>  
            </div>
            <div className='text-[14px] mt-2 lg:block hidden md:block'>
                <a href='/' className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>Home</a>
                <a className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>Services</a>
                <a className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>Portfolio</a>
                <a href="/about" className='m-5 cursor-pointer hover:text-[#02B5DC] ease-in-out duration-300'>About Me</a>
            </div>
            <div class="flex flex-col w-5 h-5 mt-4 items-end">
              <div class="bg-black h-[2px] rounded w-full relative">
               
              </div>
              <div class="bg-black h-[2px] rounded w-1/2 mt-1"></div>
            </div>
            
        </div>
    );
}

export default Header;