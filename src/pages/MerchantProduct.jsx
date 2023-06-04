import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/section/ProductCard';
import { getFavorites } from '../reducers/favoritesReducer';
import { getMerchantById } from '../reducers/merchantsReducer';
import {mapFavoritesToProduct} from "../utils/mapFavoriteToProduct"

const MerchantProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { currentMerchant } = useSelector((state) => state.merchants)
  const { favorites } = useSelector(state => state.favorites)
  useEffect(() => {
    dispatch(getFavorites())
    dispatch(getMerchantById(id))
  }, [dispatch])

  

  console.log("asdasdas",mapFavoritesToProduct())

  if (currentMerchant && favorites) {
    return (
      <div className="w-[1220px] m-auto">
        <div className="flex  justify-start items-start my-10">
          <div className="grid grid-cols-4  gap-4">
            {mapFavoritesToProduct(favorites,currentMerchant.products).map((product, index) => {
              return (
                <ProductCard product={product} key={index} />
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
