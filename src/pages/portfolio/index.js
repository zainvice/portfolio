import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AnimatedCursor from 'react-animated-cursor';
const Portfolio = (props) => {
    return (
        <>
         <AnimatedCursor 
          color="2, 181, 220"
          trail={10}
        />
            <Header/>
                <div className='w-full h-[300px] mx-auto mt-40 text-center text-[40px]'>
                     <p className='home text-[#02B5DC]'>Hey! no peeking <i class="fa-regular fa-face-smile-wink"></i></p>
                </div>
                <div className="fixed bottom-0 right-5 bg-[#02B5DC] text-white font-bold p-3 rounded-t-[10px] z-50">
            <p className='animate-wiggle'>Still a work in progress!</p>
         </div>
            <Footer/>
        </>
    );
}

export default Portfolio;