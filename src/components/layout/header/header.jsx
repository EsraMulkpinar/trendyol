import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';



const Header = () => {
  return (
   <div className="max-w-[1200px] mx-auto">
    <div className='flex justify-between items-center mt-7'>
      <a href='/' className="">
        <img className='w-[146px]' src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" />
      </a>
      <div className="relative">
        <input className='w-[598px] px-3 py-2 bg-secondaryColor border-2 border-grayColor focus-visible:outline-primaryColor' placeholder="Aradığınız ürün, kategori veya markayı yazınız" type="text" name="" id="" />
        <div className=" absolute top-3 right-2 rounded-md z-10">
          <BiSearchAlt2 size={25} className='fill-primaryColor'/>
        </div>
        
      </div>
      <div className="flex space-x-8">
        <a className="flex items-center space-x-1 group cursor-grabbing">
        <AiOutlineUser className='group-hover:fill-primaryColor'/>
          <div className="text-sm group-hover:text-primaryColor">Hesabım</div>
        </a>
        <a className="flex items-center space-x-1 group cursor-grabbing">
        <MdFavoriteBorder className='group-hover:fill-primaryColor'/>
          <div className="text-sm group-hover:text-primaryColor">Favorilerim</div>
        </a>
        <a className="flex items-center space-x-1 group cursor-grabbing">
          <SlBasket className='group-hover:fill-primaryColor'/>
          <div className="text-sm group-hover:text-primaryColor">Sepetim</div>
        </a>
      </div>
    </div>
   </div> 
    
  )
}

export default Header