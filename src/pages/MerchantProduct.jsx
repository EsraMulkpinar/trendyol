import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMerchantById } from '../reducers/merchantsReducer'
import { AiOutlineHeart } from 'react-icons/ai';

const MerchantProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentMerchant } = useSelector((state) => state.merchants)
  const { categorie } = useSelector((state) => state.merchants)
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
                <div className="relative text-left border border-borderColor rounded-lg" key={index}>
                  <div className="absolute z-10 right-2 top-2 ">
                    <button className='rounded-full bg-white p-2 border'> <AiOutlineHeart className='text-grayBgColor hover:text-primaryColor ' size={25} /></button>
                  </div>
                  <img className='w-full h-80 object-cover' src={product.image} alt="" />
                  <div className="p-4">
                    <div className="line-clamp-2">{product.merchant.name} <span>{product.name}</span></div>
                    <div className="">{product.price} TL</div>
                  </div>
                </div>
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
