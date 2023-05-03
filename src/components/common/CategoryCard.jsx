import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

const CategoryCard = ({ categorie }) => {
  const [isHover, setHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  return (
  
    <div className="max-w-[1200px] mx-auto  ">
  <div className="flex justify-start">
    <div className="group inline-block relative ">
      <button className="text-gray-700 font-semibold rounded inline-flex items-center  mx-4">
        <div
          className="font-semibold text-sm hover:text-orange-600 hover:underline hover:underline-offset-4 hover:decoration-[3px] "
        >
          {categorie.name}
        </div>
      </button>
      <ul className="absolute right-0 hidden text-gray-700 pt-1 group-hover:block w-full  bg-red-400">
        <li className="">
          <a
            className="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="/"
          >
            One
          </a>
        </li>
        <li className="">
          <a
            className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            href="/"
          >
            Two
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>


  )
}

export default CategoryCard
