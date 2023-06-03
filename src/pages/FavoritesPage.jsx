import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';


const FavoritesPage = () => {
  return (
    <div className="w-[1220px] m-auto my-10">
      <div className="flex items-center justify-start text-lg m-2"><AiOutlineHeart className='text-grayBgColor mx-2' size={25} />Favorilerim</div>
      <div className='grid grid-cols-4  gap-4'>
        <div className="">
          <div className="relative text-left border border-borderColor rounded-lg" >
            <div className="absolute z-10 right-2 top-2 ">
              <button className='rounded-full bg-white p-2 border'> <AiOutlineHeart className='text-grayBgColor hover:text-primaryColor' size={25} /></button>
            </div>
            <img className='w-full h-80 object-cover' src='https://picsum.photos/200/300' alt="" />
            <div className="flex items-center">
            <div className="p-4">
              <div className="line-clamp-2">TrendyolMilla <span>Kazak</span></div>
              <div className="">200 TL</div>
            </div>
            <button className='px-3 py-1 border border-primaryColor rounded-lg text-primaryColor'>Sepete Ekle</button>

            </div>
          </div>
        </div>
     
      </div>
    </div>

  )
}

export default FavoritesPage