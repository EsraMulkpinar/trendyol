import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMerchantById } from '../reducers/merchantsReducer'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { addToFavorites } from '../reducers/favoritesReducer';
import MerchantProductCard from '../components/section/MerchantProductCard';

const MerchantProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentMerchant } = useSelector((state) => state.merchants)
  useEffect(() => {
    dispatch(getMerchantById(id))
  }, [dispatch])
  console.log(currentMerchant)

  if (currentMerchant) {
    return (
      <div className="w-[1220px] m-auto">
        <div className="flex  justify-start items-start my-10">
          <div className="grid grid-cols-4  gap-4">
            {currentMerchant.products.map((product, index) => {
              return (
               <MerchantProductCard product={product} key={index}/>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
  return <div className="text-5xl font-bold">Loading...</div>
}

export default MerchantProduct
