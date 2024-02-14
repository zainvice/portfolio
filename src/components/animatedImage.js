import React from 'react';

const AnimatedImage = (props) => {
    return (
        <div className="w-[280px] h-[280px] lg:w-[500px] lg:h-[500px] md:w-[500px] md:h-[500px] lg:mr-10 mt-10 lg:mt-0 lg:relative ">
            <div className="absolute text-left">
              <div className="box box1 absolute flex w-[200px] h-[60px] rounded-[15px] bg-gray-100 z-30">
                    
                      <img className="w-[40px] h-[40px] mt-2 ml-2" src="icons/prof.png" alt="Profile" />
                    
                    <div className='flex flex-col mt-2 ml-2'>
                        <p className='text-[14px] font-bold'>Full Stack Designer</p> 
                        <p className='text-[12px]'>2 Years</p>
                    </div>
               </div>
              <div className="box box2 absolute flex w-[120px] h-[60px] rounded-[15px] bg-gray-100 z-10">
                    <img className="w-[40px] h-[40px] mt-2 ml-2" src="icons/proj.png" alt="Projects"/>
                    <div className='flex flex-col mt-2 ml-2'>
                        <p className='text-[14px] font-bold'>30+</p>
                        <p className='text-[12px]'>Projects</p></div>
                    </div>
              <div className="box box3 absolute flex w-[150px] h-[60px] rounded-[15px] bg-gray-100 z-20">
                <img className="w-[30px] h-[30px] mt-3 ml-3" src="icons/star.png" alt="Rating" />
                    <div className='flex flex-col mt-2 ml-2'> 
                        <p className='text-[14px] font-bold'>5.0</p>
                        <p className='text-[12px]'>Satisfaction</p>
                    </div>
            </div>
               
            </div>
            <img className='shadow-blue-lg' src="img/aboutme.png" alt="About_ME"/>
            
        </div>
    );
}

export default AnimatedImage;