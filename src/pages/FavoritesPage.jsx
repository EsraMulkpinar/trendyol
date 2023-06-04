import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../reducers/favoritesReducer';
const FavoritesPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])
  const { favorites } = useSelector((state) => state.favorites)
  console.log(favorites);
  return (
    <div className="w-[1220px] m-auto my-10" >
      <div className="flex items-center justify-start text-lg m-2">
        <AiOutlineHeart className='text-grayBgColor mx-2' size={25} />
        Favorilerim
      </div>
      <div className='grid grid-cols-4  gap-4' >
      {
        favorites?.map((favorite, index) =>
            <div className="relative col-span-1 text-left border border-borderColor rounded-lg" key={index} >
              <div className="absolute z-10 right-2 top-2 ">
                <button className='rounded-full bg-white p-2 border'> <AiOutlineHeart className='text-grayBgColor hover:text-primaryColor' size={25} /></button>
              </div>
              <img className='w-full h-80 object-cover' src='https://picsum.photos/200/300' alt="" />
              <div className="flex items-center">
                <div className="p-4">
                  <div className="line-clamp-2">{favorite.product.merchant.name} <div>{favorite.product.name}</div></div>
                  <div className="">{favorite.product.price}</div>
                </div>
                <button className='px-3 py-1 border border-primaryColor rounded-lg text-primaryColor'>Sepete Ekle</button>

              </div>
            </div>
        )
      }
      </div>
    </div>
  )


}


export default FavoritesPage