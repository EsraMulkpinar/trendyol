import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../reducers/categoriesReducer'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { AiOutlineHeart } from 'react-icons/ai';

const CategoryProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { currentCategory } = useSelector((state) => state.categories)
  useEffect(() => {
    dispatch(getCategoryById(id))
  }, [])
  console.log(currentCategory);
  return (
    <div className="w-[1220px] m-auto ">
    <div className="grid grid-cols-4  gap-4 my-10">
      {currentCategory?.products.map((product, index) => {
        return (
          <div className="relative text-left border border-borderColor rounded-lg" key={index}>
            <div className="absolute z-10 right-2 top-2 ">
              <button className='rounded-full bg-white p-2 border'> <AiOutlineHeart className='text-grayBgColor hover:text-primaryColor ' size={25} /></button>
            </div>
            <img className='w-full h-80 object-cover' src={product.image} alt="" />
            <div className="p-4">
              <div className="line-clamp-2">{product.merchant.name} <span>{product.name}</span></div>
              <div className="">{product.price} TL</div>
              <button className='px-3 py-1 border border-primaryColor rounded-lg text-primaryColor'>Sepete Ekle</button>
            </div>
          </div>
        )
      })}
    </div>

  </div>
  )
}

export default CategoryProduct