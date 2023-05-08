import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMerchantById } from '../reducers/merchantsReducer'

const MerchantProduct = () => {
  const [isOpen, setisOpen] = useState(false)
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentMerchant } = useSelector((state) => state.merchants)
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
        <button
          onClick={() => {
            handleClick()
            console.log('aa')
          }}
          type="button"
        >
          İlgili
        </button>
        {isOpen && (
          <div>
            <ul>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Earnings</a>
              </li>
              <li>
                <a href="#">Sign out</a>
              </li>
            </ul>
          </div>
        )}

        <div className="grid grid-cols-4  gap-4">
          {currentMerchant.products.map((product, index) => {
            return (
              <div className="bg-red-300 text-left" key={index}>
                <img className='w-full' src="https://picsum.photos/230/350" alt="" />
                <div className="p-4">
                <div className="line-clamp-2">{product.merchant.name} <span>{product.name}</span></div>
                <div className="">{product.price}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  return <div className="text-5xl font-bold">Loading...</div>
}

export default MerchantProduct
