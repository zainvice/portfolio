
import Header from "../../components/header";
import AnimatedImage from "../../components/animatedImage";
import AnimatedCursor from "react-animated-cursor";
import Footer from "../../components/footer";
const Dashboard = () => {
    return (
        <>
        <AnimatedCursor 
          color="2, 181, 220"
          trail={10}
        />
         <Header/>
         <div className="flex flex-col lg:flex-row justify-between mx-10 mt-10 items-center">
           
            <div className=" lg:text-left text-center ">
              <p className="font-bold">Hi there!</p>
              <p className="home text-[60px]"><span className="text-[#02B5DC]">Zane</span> is here to be</p>
              <p className="home text-[60px] -mt-5">your assistance</p>
              <p className="text-[#333333]">I am here ready to help you in making creative digital products</p>
              <button className="mt-10 bg-[#02B5DC] animate-bounce hover:animate-none text-white p-3 text-sm rounded-full border-2 border-[#02B5DC] hover:bg-white hover:text-[#02B5DC] hover:font-bold duration-300">Let's Discuss</button>
            </div>
            <AnimatedImage/>
         </div>
         
         <div className="flex flex-col lg:mx-10 md:mx-10 my-10 lg:text-left text-center ">
            <p className="home text-[36px] lg:text-[36px] md:text-[60px]">Our Services</p>
            <div className="flex flex-row lg:ml-5 md:ml-2 flex-wrap items-center lg:justify-normal justify-center">
                <a href="services.html"><div className="hover:bg-white hover:text-[#02B5DC] duration-300 hover:animate-bounce lg:mx-4 md:mx-2 my-4 w-[220px] font-bold text-white rounded-[20px] h-[120px] bg-[#02B5DC] border-2 border-[#02B5DC] flex flex-col text-center items-center content-center"><i className="fa-brands fa-connectdevelop text-[50px] mt-5 hover:animate-spin"></i><p className="mt-2">Back End Development</p></div></a>
                <a href="services.html"><div className="hover:bg-[#02B5DC] hover:text-white duration-300 hover:animate-bounce lg:mx-4 md:mx-2 my-4 w-[220px] font-bold text-[#02B5DC] rounded-[20px] h-[120px] border-2 border-[#02B5DC] flex flex-col text-center items-center content-center"><i className="fa-brands fa-figma text-[50px] mt-5 hover:animate-ping"></i><p className="mt-2">UX/UI Design</p></div></a>
                <a href="services.html"><div className="hover:bg-white hover:text-[#02B5DC] duration-300 hover:animate-bounce lg:mx-4 md:mx-2 my-4 w-[220px] font-bold text-white rounded-[20px] h-[120px] bg-[#02B5DC] border-2 border-[#02B5DC] flex flex-col text-center items-center content-center"><i className="fa-brands fa-reacteurope text-[50px] mt-5 hover:animate-spin"></i><p className="mt-2">Front End Development</p></div></a>
                <a href="services.html"><div className="hover:bg-[#02B5DC] hover:text-white duration-300 hover:animate-bounce lg:mx-4 md:mx-2 my-4 w-[220px] font-bold text-[#02B5DC] rounded-[20px] h-[120px] border-2 border-[#02B5DC] flex flex-col text-center items-center content-center"><i className="fa-brands fa-node text-[50px] mt-5 hover:animate-ping"></i><p className="mt-2">Full Stack Development</p></div></a>
            </div>
         </div>
         <div className="fixed bottom-0 right-5 bg-[#02B5DC] text-white font-bold p-3 rounded-t-[10px]">
            <p className='animate-wiggle'>Still a work in progress!</p>
         </div>
         <Footer/>
        </>
        
    );
}

export default Dashboard;