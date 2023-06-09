import React, { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addToBasket, addToTotalBasket, decreaseItem, decreaseQuantity, getBasket, increaseItem, removeFromBasket, removeFromTotalBasket } from '../../reducers/basketReducer'

const BasketCard = ({ product, quantity, id }) => {
    const [isActive, setisActive] = useState(true)
    const dispatch = useDispatch()
    const handleRemoveFromBasket = () => {
        dispatch(removeFromBasket(id)).then(() => dispatch(getBasket()))
    }
    
    return (
        <div className="relative text-left border border-borderColor rounded-lg" >
            <button className="absolute right-14 top-1/2" onClick={handleRemoveFromBasket}>
                <BsTrash className='text-grayBgColor hover:text-primaryColor' size={20} />
            </button>
            <div className="flex items-center mx-5 p-10">
                <div className="mx-5">
                    <input className='p-2 bg-primaryColor text-black' type="checkbox" checked={isActive} onChange={(e) => {
                        if(e.target.checked) {
                            dispatch(addToTotalBasket(id))
                            setisActive(true)
                        }
                        else {
                            dispatch(removeFromTotalBasket(id))
                            setisActive(false)
                        }

                    }} />
                </div>
                <div className="flex justify-start">
                    <img className='w-16 h-24 object-cover mx-5' src={product.image} alt="" />
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className='font-semibold'>{product.merchant.name}</div>
                            <span className="mx-5">{product.name}</span>
                        </div>
                        <div className="flex justify-start items-center ">
                            <button className='bg-gray-200 p-2 rounded-sm border' onClick={() => dispatch(decreaseQuantity(product.id)).then(() => dispatch(getBasket())).then(() => isActive && dispatch(decreaseItem(id)))}>-</button>
                            <span className=' p-2 rounded-sm border'>{quantity}</span>
                            <button className='bg-gray-200 p-2 rounded-sm border' onClick={() => dispatch(addToBasket(product.id)).then(() => dispatch(getBasket())).then(() => isActive && dispatch(increaseItem(id)))}>+</button>
                        </div>
                        <div className="font-bold text-lg  text-primaryColor ">{parseFloat(product.price) * quantity}TL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketCard