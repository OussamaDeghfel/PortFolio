import React from 'react'

const Skill = ({ icon, name }) => {
    return (
      <div className="w-32 h-36 p-4 shadow-sm shadow-[#040c16] hover:shadow-md hover:shadow-[#040c16] hover:scale-105 duration-500 rounded-md">
        <img className="w-14 mx-auto" src={icon} alt={name} />
        <p className="my-4">{name}</p>
      </div>
    );
  };

export default Skill