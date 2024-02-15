import React from 'react';

const Footer = (props) => {
    return (
        <div className='flex flex-col lg:flex-row md:flex-row justify-between bg-[#F9F9F9] text-base text-center lg:text-left md:text-left'>
            <div className="flex flex-col my-5 text-[12px] content-center items-center lg:ml-14 md:ml-14">
                <span className="font-bold text-[14px] ">Browse<span className='text-[#02B5DC]'> Site</span></span>               
                <div className='flex lg:flex-col md:flex-col'>
                    <a className='mx-2 hover:font-bold hover:text-[#02B5DC] duration-300' href='/'>Home</a>
                    <a className='mx-2 hover:font-bold hover:text-[#02B5DC] duration-300' href='/services'>Services</a>
                    <a className='mx-2 hover:font-bold hover:text-[#02B5DC] duration-300' href='/portfolio'>Portfolio</a>
                    <a className='mx-2 hover:font-bold hover:text-[#02B5DC] duration-300' href='/about'>About Me</a>
                </div>
               
              </div>
            <div className="text-center text-sm my-5 lg:ml-4 md:ml-4">
              <span className='font-bold'>Subscribe to my <span className='text-[#02B5DC]'>Newsletter</span> </span>
              <form className='mt-5 mx-2 flex relative '>
                  <input className="border-2 p-2 border-[#02B5DC] rounded-full flex-grow " type="email" placeholder="Enter Email"/>
                  <button className="absolute hover:animate-wiggle hover:font-bold right-0 top-0 bg-[#02B5DC] border-2 border-[#02B5DC] p-2 text-white rounded-full hover:bg-white hover:text-[#02B5DC] duration-300" type="submit">Submit</button>
              </form>
              <div className='font-bold text-[12px] text-gray-500 my-8'><span ><a  href="https://www.upwork.com/freelancers/~01f57154b8155bc912 "
                target="_blank" rel='noreferrer'>
                Zane &copy; Copyright 2022-2024
                </a></span></div>
            </div>
            <div className="flex flex-col font-bold my-5 text-center lg:text-left lg:mr-5 md:text-left md:mr-5">
              <span className='text-[#02B5DC]'>Social <span className='text-black'>Links</span></span> 
              <div className='flex w-full mt-2 mb-6 justify-center text-center '>
                <a className=' w-[30px] border-2 border-[#02B5DC] hover:animate-spin rounded-full text-[#02B5DC] mx-2 hover:bg-[#02B5DC] hover:text-white duration-300' href="https://www.linkedin.com/in/zainvice/" target='_blank' rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                <a className=' w-[30px] border-2 border-[#02B5DC] hover:animate-spin hover:bg-[#02B5DC] hover:text-white duration-300 rounded-full  content- text-[#02B5DC] mx-2' href="https://www.facebook.com/zainvice" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a  className=' w-[30px] border-2 border-[#02B5DC] hover:animate-spin rounded-full text-[#02B5DC] mx-2 hover:bg-[#02B5DC] hover:text-white duration-300' href="https://www.github.com/zainvice" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a className=' w-[30px] border-2 border-[#02B5DC] hover:animate-spin rounded-full text-[#02B5DC] mx-2 hover:bg-[#02B5DC] hover:text-white duration-300'  href="https://www.twitter.com/zainvice" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                <a  className=' w-[30px] border-2 border-[#02B5DC] hover:animate-spin rounded-full text-[#02B5DC] mx-2 hover:bg-[#02B5DC] hover:text-white duration-300' href="https://www.instagram.com/zainvice" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                
              </div>
            </div>
        </div>
    );
}

export default Footer;