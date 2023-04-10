import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const CategoryCard = ({ categorie }) => {
  const [isHover, setHover] = useState(false)
  return (
    <button onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="flex flex-col columns-3 items-center md:justify-start mx-2 my-4 group">
      <a href="/"  className='overflow-hidden'>
        <img
          className="w-96 h-52 object-cover  transition ease-in-out  delay-75 group-hover:translate-y-px hover:scale-x-105 duration-1000 rounded-t-lg"
          src={categorie.image}
          alt=""
        />
      </a>
      <div className="flex justify-between w-full py-2 px-5 rounded-b-lg bg-backgroundBlack group-hover:bg-primaryColor">
      <div className="text-sm text-start text-white ">{categorie.name}</div>
    <div className="flex items-center">
    <div className={`${isHover ? "flex" : "hidden"} text-sm text-white`}>Alışverişe Başla</div>
      <MdOutlineArrowForwardIos  className={`${isHover ? "flex" : "hidden"} text-sm text-white`}/>
    </div>
      </div>
    </button>
)
}

export default CategoryCard