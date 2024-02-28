import React, {useState} from 'react';

const ProjectCard = ({description, imageUrl, heading, images}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images?.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images?.length - 1 ? 0 : prevIndex + 1));
    };
    return (
        <div className='homer border-2 border-black rounded-[30px] flex flex-col justify-center items-center text-sm overflow-hidden mx-2 my-2 hover:bg-[#02B5DC] hover:border-gray-400 hover:text-white ease-in-out duration-300 '>
            <div className='mx-2 my-2 relative'>
             <img src={images?.length>0 ? images[currentImageIndex] : ''} alt='project' className='rounded-[30px] h-[200px] w-[400px] shadow-blue-sm border-2 border-white' />
             <div className='absolute top-0 left-0 flex h-full w-full justify-between'>
               <button onClick={handlePrevClick} className='text-white text-[20px] ml-3 hover:text-[#02B5DC] ease-in-out duration-300'>
                <i className="fa-solid fa-caret-left"></i>
               </button>
               <button onClick={handleNextClick} className='text-white text-[20px] mr-3 hover:text-[#02B5DC] ease-in-out duration-300'>
                <i className="fa-solid fa-caret-right"></i>
               </button>
             </div>
             <div className='absolute bottom-2 left-0 w-full flex justify-center items-center'>
        {images?.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 border-1 border-[#02B5DC] ${currentImageIndex === index ? 'bg-[#02B5DC]' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
           </div>
            <p className='text-[#02B5DC] font-bold text-[18px] my-2'>{heading}</p>
            <p className='font-sm text-justify mx-2 mb-3'>{description}</p>

        </div>
    );
}

export default ProjectCard;