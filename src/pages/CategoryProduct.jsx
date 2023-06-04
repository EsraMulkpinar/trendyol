import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../reducers/categoriesReducer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import ProductCard from '../components/section/ProductCard';
import { mapFavoritesToProduct } from '../utils/mapFavoriteToProduct';
import { getFavorites } from '../reducers/favoritesReducer';

const CategoryProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { currentCategory } = useSelector((state) => state.categories)
  const { favorites } = useSelector(state=> state.favorites)
  useEffect(() => {
    dispatch(getCategoryById(id))
    dispatch(getFavorites())
  }, [])
  return (
    <div className="w-[1220px] m-auto ">
    <div className="grid grid-cols-4  gap-4 my-10">
      {mapFavoritesToProduct(favorites,currentCategory?.products)?.map((product, index) => <ProductCard product={product} key={product.id} />)}
    </div>

  </div>
  )
}

export default CategoryProduct