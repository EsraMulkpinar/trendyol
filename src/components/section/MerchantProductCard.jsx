import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, getFavorites, removeFavorites } from '../../reducers/favoritesReducer';
const MerchantProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const [isAdded, setisAdded] = useState(false)
    useEffect(() => {
        dispatch(getFavorites())
    }, [])
    const { favorites } = useSelector((state) => state.favorites)
    console.log(favorites);
    return (
        <div className="relative text-left border border-borderColor rounded-lg" >
            {favorites?.forEach((favorite, index) => {
                if (favorite.id === product.id&&isAdded) {
                    console.log("Selam");
                }
            })}
            {isAdded ?
                <div className="absolute z-10 right-2 top-2 ">
                    <button className='rounded-full bg-white p-2 border'>
                        <AiFillHeart onClick={() => {
                            setisAdded(!isAdded)
                            dispatch(addToFavorites({ product_id: product.id }))
                        }}
                            className='text-primaryColor' size={25} />
                    </button>
                </div>
                : <div className="absolute z-10 right-2 top-2 ">
                    <button className='rounded-full bg-white p-2 border'>
                        <AiOutlineHeart onClick={() => {
                            dispatch(removeFavorites({ product_id: product.id }))
                            setisAdded(!isAdded)
                        }} className='text-grayBgColor hover:text-primaryColor ' size={25} /></button>
                </div>
            }
            <img className='w-full h-80 object-cover' src={product.image} alt="" />
            <div className="p-4">
                <div className="line-clamp-2">{product.merchant.name} <span>{product.name}</span></div>
                <div className="">{product.price} TL</div>
            </div>
        </div>
    )
}

export default MerchantProductCard