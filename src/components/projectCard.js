import React from 'react';

const ProjectCard = ({description, imageUrl, heading}) => {
    return (
        <div className='homer border-2 border-black rounded-[30px] flex flex-col justify-center items-center text-sm overflow-hidden mx-2 my-2 hover:bg-[#02B5DC] hover:border-gray-400 hover:text-white ease-in-out duration-300 '>
            <div className='mx-2 my-2'>
                <img src={imageUrl} alt='project-image' className='rounded-[30px] shadow-blue-sm border-2 border-white'/>
            </div>
            <p className='text-[#02B5DC] font-bold text-[18px] my-2'>{heading}</p>
            <p className='font-sm text-justify mx-2 mb-3'>{description}</p>

        </div>
    );
}

export default ProjectCard;