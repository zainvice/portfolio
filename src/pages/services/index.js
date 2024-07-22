import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AnimatedCursor from 'react-animated-cursor';
const Services = (props) => {
    return (
        <>
         <AnimatedCursor 
          color="2, 181, 220"
          trail={10}
        />
            <Header/>
                <div className='w-full mx-auto my-20 text-center'>
                    <div className="items-center text-center">
                        <p className="home text-[40px] animate-bounce">Here are the <span className='text-[#02B5DC]'>services</span> i offer  </p>
                        <div className='flex flex-col lg:flex-row justify-center items-center lg:mx-14 my-10'>
                            <div className="homer border-2 border-black hover:border-[#02B5DC] hover:bg-[#02B5DC] hover:text-white duration-300 w-[230px] h-[350px] rounded-[20px] flex flex-col my-4 mx-4 justify-between">
                                <i className="fa-brands fa-reacteurope text-[50px] hover:animate-spin text-[#02B5DC] my-5"></i>
                                <p className='font-bold'>Front-end development</p>
                                <p className="text-sm">Developing the user interface and experience (UI/UX) for the website using React and     Next JS.</p>
                                <button className="bg-[#02B5DC]  text-white p-2 text-[12px] rounded-full border-2 border-[#02B5DC] hover:bg-white hover:text-[#02B5DC] hover:font-bold duration-300 animate-pulse">See Projects</button>
                            </div>
                            <div className="homer border-2 border-black hover:border-[#02B5DC] hover:bg-[#02B5DC] hover:text-white duration-300 w-[230px] h-[350px] rounded-[20px] flex flex-col my-4 mx-4 justify-between">
                                <i className="fa-brands fa-figma text-[50px] hover:animate-ping text-[#02B5DC] my-5"></i><p className='font-bold'>UI/UX Design</p><p className="text-sm">     Creating an intuitive and engaging user experience by designing the visual layout, and overall aesthetics of    a digital product's interface using Figma.</p><button className="bg-[#02B5DC]  text-white p-2 text-[12px] rounded-full border-2 border-[#02B5DC] hover:bg-white hover:text-[#02B5DC] hover:font-bold duration-300 animate-pulse">See Projects</button></div>
                            <div className="homer border-2 border-black hover:border-[#02B5DC] hover:bg-[#02B5DC] hover:text-white duration-300 w-[230px] h-[350px] rounded-[20px] flex flex-col my-4 mx-4 justify-between">
                            <i className="fa-brands fa-connectdevelop text-[50px] hover:animate-spin text-[#02B5DC] my-5"></i><p className='font-bold'>Back End Development</p><p   className="text-sm">Developing the server-side logic of the website, such as APIs and databases, using back-end   technologies like Node.js, Django, or PHP.</p><button className="bg-[#02B5DC]  text-white p-2 text-[12px] rounded-full border-2 border-[#02B5DC] hover:bg-white hover:text-[#02B5DC] hover:font-bold duration-300 animate-pulse">See Projects</button></div>
                            <div className="homer border-2 border-black hover:border-[#02B5DC] hover:bg-[#02B5DC] hover:text-white duration-300 w-[230px] h-[350px] rounded-[20px] flex flex-col my-4 mx-4 justify-between">
                            <i className="fa-brands fa-node text-[50px] hover:animate-ping text-[#02B5DC] my-5"></i><p className='font-bold'>Full Stack Development</p><p    className="text-sm">Developing both front-end and back-end portions of the website, ensuring seamless  integration between the two.</p><button className="bg-[#02B5DC]  text-white p-2 text-[12px] rounded-full border-2 border-[#02B5DC] hover:bg-white hover:text-[#02B5DC] hover:font-bold duration-300 animate-pulse">See Projects</button></div>
                            </div>
                        </div>
                       {/* <p className='home text-[#02B5DC] text-[40px]'>Hey! no peeking <i class="fa-regular fa-face-smile-wink"></i></p> */}
                </div>
                {/* <div className="fixed bottom-0 right-5 bg-[#02B5DC] text-white font-bold p-3 rounded-t-[10px] z-50">
            <p className='animate-wiggle'>Still a work in progress!</p>
         </div> */}
            <Footer/>
        </>
    );
}

export default Services;