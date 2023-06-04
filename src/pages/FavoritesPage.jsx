import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import MerchantProductCard from '../components/section/ProductCard';
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
        favorites?.map((fav) => <MerchantProductCard product={{...fav.product, isFavorited:true}} key={fav.id} />)
      }
      </div>
    </div>
  )


}


export default FavoritesPage