import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMerchantById } from '../reducers/merchantsReducer'
import { AiOutlineHeart } from 'react-icons/ai';

const MerchantProduct = () => {
  const [isOpen, setisOpen] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentMerchant } = useSelector((state) => state.merchants)
  const { categorie } = useSelector((state) => state.merchants)
  useEffect(() => {
    dispatch(getMerchantById(id))
  }, [dispatch])
  const handleClick = () => {
    setisOpen(!isOpen)
  }
  console.log(currentMerchant)
  if (currentMerchant) {
    return (
      <div className="w-[1220px] m-auto">
        <div className="flex  justify-start items-start mt-10">
          <div className="min-w-[200px] text-start">
            <button
              onClick={() => {
                handleClick()
                console.log('aa')
              }}
              type="button"
              className='text-sm text-grayTextColor font-semibold'
            >
             Kategoriler
            </button>
            {isOpen && (
              <div className='text-backgroundBlack text-[13px] my-2'>
                <ul>
                  <li className='my-1'>
                    <a href="#">Elbise</a>
                  </li>
                  <li className='my-1'>
                    <a href="#">Omuz Çantası</a>
                  </li>
                  <li className='my-1'>
                    <a href="#">Tişört</a>
                  </li>
                  <li className='my-1'>
                    <a href="#">Gömlek</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="grid grid-cols-4  gap-4">
            {currentMerchant.products.map((product, index) => {
              return (
                <div className="relative text-left border border-borderColor rounded-lg" key={index}>
                  <div className="absolute z-10 right-2 top-2 ">
                    <button className='rounded-full border-borderColor'> <AiOutlineHeart className='text-white' size={25} /></button>
                  </div>
                  <img className='w-full' src={product.image} alt="" />
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
