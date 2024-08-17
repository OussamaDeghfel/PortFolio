import React from 'react'
import comingSoon from "../assets/projects/ComingSoon.jpg"

const ProjectEdit = () => {
  return (
    <div className='grid justify-around bg-[#0a192f] text-white  items-center w-full h-full'>
        <h1>Projects</h1>
        <p>These are the projects I have built using the skills outlined above</p>
        <div className='grid grid-cols-3 gap-5'>
            <div className='flex h-56 w-56'>
                <img src={comingSoon} alt="comming soon project" />
            </div>
            <div className='flex h-56 w-56'>
                <img src={comingSoon} alt="comming soon project" />
            </div>
            <div className='flex h-56 w-56'>
                <img src={comingSoon} alt="comming soon project" />
            </div>
            <div className='flex h-56 w-56'>
                <img src={comingSoon} alt="comming soon project" />
            </div>
            <div className='flex h-56 w-56'>
                <img src={comingSoon} alt="comming soon project" />
            </div>
            <div className='flex h-56 w-56'>
                <img src={comingSoon} alt="comming soon project" />
            </div>
        </div>
    </div>
  )
}

export default ProjectEdit