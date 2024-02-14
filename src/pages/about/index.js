import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AnimatedCursor from "react-animated-cursor";
import AnimatedImage from '../../components/animatedImage';

const About = (props) => {
    return (
        <>
            <Header/>
            <AnimatedCursor 
              color="2, 181, 220"
              
            />
            <div className='flex flex-col lg:flex-row mx-10 lg:my-20 my-10'>
                <div className='lg:w-1/2 lg:mx-4'>
                <p className='home text-[#333333] text-[40px] lg:text-[70px] animate-typing overflow-hidden whitespace-nowrap inline-block'>SO, <span className='text-[#02B5DC]'>WHO</span> AM I?</p>
                <p className='text-justify text-[#333333] animate-typingh'>My name is Zane, and I'm the Co-Founder of <a href='https://techedge.pro' className='text-[#02B5DC]' target="_blank" rel="noreferrer">Tech Edge</a> a Full Stack Designer with more than two years of experience in the industry.
                    So, what is a Full Stack Designer, you might ask? Well, it's a combination of both UX/UI design and Full Stack Development. As a Full Stack Designer, I have a unique set of skills that allow me to not only design beautiful and user-friendly interfaces but also develop and implement the necessary functionality to bring those designs to life.
                    Throughout my career, I have worked on a variety of projects, from e-commerce websites to mobile apps, for clients in a range of industries. My focus is always on creating products that are not only visually appealing but also easy to use and intuitive for the end-users.
                    I am passionate about staying up-to-date with the latest design trends and technologies, and I am constantly seeking out new challenges and opportunities for growth. When I'm not working, you can usually find me tinkering with new design tools or experimenting with new coding languages.
                    Thank you for taking the time to learn a bit more about me, and I look forward to working with you!</p>
                </div>
                <div className="lg:w-1/2 lg:mx-4 justify-center flex flex-col items-center text-center mt-10 mg:mt-0">
                     <AnimatedImage/>
                     <button className="mt-10 bg-[#02B5DC] animate-bounce hover:animate-none text-white p-3 text-sm rounded-[20px] border-2 border-[#02B5DC] hover:bg-white hover:text-[#02B5DC] hover:font-bold duration-300">Contact Us</button>
                </div>
            </div>
            <div className="fixed bottom-0 right-5 bg-[#02B5DC] text-white font-bold p-3 rounded-t-[10px]">
            <p className='animate-wiggle'>Still a work in progress!</p>
         </div>
            <Footer/>
        </>
    );
}

export default About;