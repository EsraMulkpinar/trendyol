import React, { useEffect, useState } from 'react'
import { getMerchants } from '../../reducers/merchantsReducer'
import { useDispatch, useSelector } from 'react-redux'
import MerchantCard from '../common/MerchantCard'

const Merchants = () => {
       
  const dispatch = useDispatch()
  const {merchants} = useSelector((state) => state.merchants)
  useEffect(() => {
   dispatch(getMerchants())
  },[dispatch]) 

  return (
    <div className='w-[1220px] m-auto'>
     <div className="flex flex-row flex-wrap justify-start items-start">
      {merchants?merchants.map((merchant,key) => {
        return (
         <div className="flex flex-wrap"  key={key}>
           <MerchantCard merchant={merchant}/>
         </div>
        )
      }):null}
      </div>
    </div>
  )
}

export default Merchants
