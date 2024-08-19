import React from 'react'
import comingSoon from "../assets/projects/ComingSoon.jpg"

const ProjectEdit = () => {
  return (
    <div className='flex pt-10 justify-around bg-[#0a192f] text-white items-center w-full h-full'>
        <div className='w-[980px] '>
        <h1 className='text-4xl font-bold inline border-b-4 border-blue-300'>Projects</h1>
        <p className='py-4'>These are the projects I have built using the skills outlined above</p>
        <div className='grid grid-cols-3 w-full gap-10'>
            <div className='flex'>
                <img src={comingSoon} alt="comming soon project" className='rounded-md h-56 w-72' />
            </div>
            <div className='flex'>
                <img src={comingSoon} alt="comming soon project" className='rounded-md h-56 w-72' />
            </div>
            <div className='flex'>
                <img src={comingSoon} alt="comming soon project" className='rounded-md h-56 w-72'/>
            </div>
            <div className='flex'>
                <img src={comingSoon} alt="comming soon project" className='rounded-md h-56 w-72'/>
            </div>
            <div className='flex'>
                <img src={comingSoon} alt="comming soon project" className='rounded-md h-56 w-72'/>
            </div>
            <div className='flex'>
                <img src={comingSoon} alt="comming soon project" className='rounded-md h-56 w-72'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProjectEdit