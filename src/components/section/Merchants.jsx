import React, { useEffect, useState } from 'react'
import { getMerchants } from '../../reducers/merchantsReducer'
import { useDispatch, useSelector } from 'react-redux'
import MerchantCard from '../common/MerchantCard'
import { getProducts } from '../../reducers/productsReducer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Merchants = () => {
  const dispatch = useDispatch()
  const { merchants } = useSelector((state) => state.merchants)
  const { products } = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(getMerchants())
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div className="w-[1220px] m-auto">
      <div className="flex flex-row flex-wrap justify-start items-start">
        {merchants
          ? merchants.map((merchant, key) => {
              return (
                <Link key={key} to={`/merchant/${merchant.id}`}>
                  <div className="flex flex-wrap" key={key}>
                    <MerchantCard merchant={merchant} />
                  </div>
                </Link>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Merchants
