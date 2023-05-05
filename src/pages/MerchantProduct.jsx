import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
import { getMerchantById } from '../reducers/merchantsReducer'

const MerchantProduct = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const {currentMerchant} = useSelector(state=> state.merchants)
  useEffect(() => {
    dispatch(getMerchantById(id))
  }, [dispatch])
  if(currentMerchant){
    return (
        <div>
            {currentMerchant.products[0].name}
        </div>
    )
  }  
  return (
    <div className='text-5xl font-bold'>Loading...</div>
  )
}

export default MerchantProduct