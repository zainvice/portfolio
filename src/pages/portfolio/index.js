import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import AnimatedCursor from 'react-animated-cursor';
import ProjectCard from '../../components/projectCard';
const Portfolio = (props) => {
    const projects = new Array(6).fill(null).map((_, index) => ({
        id: index + 1,
        name: `Project ${index + 1}`,
        
    }));
    console.log(projects)
    return (
        <>
         <AnimatedCursor 
          color="2, 181, 220"
          trail={10}
        />
            <Header/>
                <div className='flex flex-col mx-10 my-10 text-center'>
                    <p className='home text-[40px] animate-pulse'>projects</p>
                    <div className='my-10 border-2 rounded-[30px] border-[#02E5DC]'>
                        <p className='home text-[30px] animate-bounce my-5'>Front-End <span className='text-[#02B5DC]'>Showcase</span></p>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                        {projects.map(value=>(

                            <>
                            {value?.Array}
                            <ProjectCard imageUrl={'https://w.wallhaven.cc/full/l8/wallhaven-l8v3ey.png'} heading={value.name} description={'some description'}/>
                            </>
                        ))}
                        {/*  <p className='home text-[#02B5DC]'>Hey! no peeking <i class="fa-regular fa-face-smile-wink"></i></p> */}
                        </div>
                    </div>
                    <div className='my-10 border-2 rounded-[30px] border-[#02E5DC]'>
                        <p className='home text-[30px] animate-bounce my-5'>UX/UI <span className='text-[#02B5DC]'>Showcase</span></p>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                        {projects.map(value=>(

                            <>
                            {value?.Array}
                            <ProjectCard imageUrl={'https://w.wallhaven.cc/full/l8/wallhaven-l8v3ey.png'} heading={value.name} description={'some description'}/>
                            </>
                        ))}
                        {/*  <p className='home text-[#02B5DC]'>Hey! no peeking <i class="fa-regular fa-face-smile-wink"></i></p> */}
                        </div>
                    </div>
                    <div className='my-10 border-2 rounded-[30px] border-[#02E5DC]'>
                        <p className='home text-[30px] animate-bounce my-5'>Backend <span className='text-[#02B5DC]'>Showcase</span></p>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                        {projects.map(value=>(

                            <>
                            {value?.Array}
                            <ProjectCard imageUrl={'https://w.wallhaven.cc/full/l8/wallhaven-l8v3ey.png'} heading={value.name} description={'some description'}/>
                            </>
                        ))}
                        {/*  <p className='home text-[#02B5DC]'>Hey! no peeking <i class="fa-regular fa-face-smile-wink"></i></p> */}
                        </div>
                    </div>
                    
                    <div className='my-10 border-2 rounded-[30px] border-[#02E5DC]'>
                        <p className='home text-[30px] animate-bounce my-5'>FullStack <span className='text-[#02B5DC]'>Showcase</span></p>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                        {projects.map(value=>(

                            <>
                            {value?.Array}
                            <ProjectCard imageUrl={'https://w.wallhaven.cc/full/l8/wallhaven-l8v3ey.png'} heading={value.name} description={'some description'}/>
                            </>
                        ))}
                        {/*  <p className='home text-[#02B5DC]'>Hey! no peeking <i class="fa-regular fa-face-smile-wink"></i></p> */}
                        </div>
                    </div>
                    

                </div>
                <div className="fixed bottom-0 right-5 bg-[#02B5DC] text-white font-bold p-3 rounded-t-[10px] z-50">
                    <p className='animate-wiggle'>Still a work in progress!</p>
                </div>
            <Footer/>
        </>
    );
}

export default Portfolio;