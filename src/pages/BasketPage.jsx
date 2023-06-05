import { useEffect, useState } from 'react';
import { SlBasket } from 'react-icons/sl';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { getBasket } from '../reducers/basketReducer';
import BasketCard from '../components/section/BasketCard';
import {useAutoAnimate}from "@formkit/auto-animate/react"

const BasketPage = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [parent] = useAutoAnimate()
  const { basket,totalBasket } = useSelector(state => state.basket)
  const [totalQuantity, settotalQuantity] = useState(0)
  const [totalPrice, settotalPrice] = useState(0)

  const paymentPagePush = () => {
    history.push("/payment")
  }

  useEffect(() => {
    dispatch(getBasket())
  }, [dispatch])  

  useEffect(() => {
    let count = 0
    let totalPrice = 0
    totalBasket.forEach(basket => {
      count += basket.quantity
      totalPrice += Number(basket.product.price) * basket.quantity
    });
    settotalQuantity(count)
    settotalPrice(totalPrice)
  }, [totalBasket])

  console.log(totalBasket)
  

  return (
    <div className="w-[1220px] m-auto mt-10 mb-24">
      <div className="flex">
        <div className="w-3/4">
          <div className="flex items-center justify-start text-lg m-2">
            <SlBasket className='text-grayBgColor mx-2' size={25} />
            Sepetim
            <span className='mx-2'>({totalQuantity} Ürün)</span>
          </div>
          <div className='my-4' ref={parent}>
            {
              basket?.map(({...basketItem}) => <BasketCard {...basketItem} key={basketItem.id} />)
            }
          </div>
        </div>
        <div className="w-1/4 mx-5 flex flex-col justify-between text-start mt-2">
          <div className="border rounded-lg p-5 flex flex-col justify-between">
            <div className="text-xl my-4">Sipariş Özeti</div>
            <div className="flex justify-between"><span>Ürünün Toplamı </span><span>{totalPrice} TL</span></div>
            <div className="flex justify-between"><span>Kargo Toplam </span><span>19,99 TL</span></div>
            <hr className='my-2' />
            <div className="flex justify-between"><span>Toplam </span><span>{parseFloat(totalPrice + 19.99).toFixed(2)} TL</span></div>
            <button className='w-full py-3 my-3 rounded-md bg-primaryColor text-white font-bold text-lg' onClick={paymentPagePush}>Sepeti Onayla</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketPage