import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToFavorites, getFavorites, removeFavorites } from '../../reducers/favoritesReducer';
const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const [isAdded, setisAdded] = useState()
    useEffect(() => {
        if (!product.isFavorited) setisAdded(false)
        else setisAdded(true)
    }, [product.isFavorited])

    return (
        <div className="relative text-left border border-borderColor rounded-lg" >
            {(product.isFavorited && isAdded) ?
                <div className="absolute z-10 right-2 top-2 ">
                    <button className='rounded-full bg-white p-2 border'>
                        <AiFillHeart onClick={() => {
                            setisAdded(false)
                            dispatch(removeFavorites(product.id)).then(() => dispatch(getFavorites()))
                        }}
                            className='text-primaryColor' size={25} />
                    </button>
                </div>
                : <div className="absolute z-10 right-2 top-2 ">
                    <button className='rounded-full bg-white p-2 border'>
                        <AiOutlineHeart onClick={() => {
                            dispatch(addToFavorites({ product_id: product.id })).then(() => dispatch(getFavorites()))
                            setisAdded(true)
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

export default ProductCard