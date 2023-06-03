import { useState } from 'react';
import { SlBasket } from 'react-icons/sl';
import { BsTrash } from 'react-icons/bs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




const BasketPage = () => {
  const [productIndex, setProductIndex] = useState(1)
  const history = useHistory();

  const paymentPagePush = () => {
    history.push("/payment")
  }
  const incrementIndex = () => {
    setProductIndex(prevIndex => prevIndex + 1);
  };

  const decrementIndex = () => {
    if (productIndex > 1) {
      setProductIndex(prevIndex => prevIndex - 1);
    }

  };
  return (
    <div className="w-[1220px] m-auto mt-10 mb-24">
      <div className="flex">
        <div className="w-3/4">
          <div className="flex items-center justify-start text-lg m-2">
            <SlBasket className='text-grayBgColor mx-2' size={25} />
            Sepetim
            <span className='mx-2'>(1 Ürün)</span>
          </div>
          <div className='my-4'>
            <div className="">
              <div className="relative text-left border border-borderColor rounded-lg" >
                <button className="absolute right-14 top-1/2 ">
                  <BsTrash className='text-grayBgColor hover:text-primaryColor' size={20} />
                </button>
                <div className=" mx-20 my-2">Satıcı: <span>Trendyol Milla</span></div>
                <hr />
                <div className="flex items-center mx-5 p-10">
                  <div className="mx-5"><input className='p-2 bg-primaryColor text-black' type="checkbox" checked />
                  </div>
                  <div className="flex justify-start">
                    <img className='w-16 h-24 object-cover mx-5' src='https://picsum.photos/200/300' alt="" />
                    <div className="flex flex-col">
                      <div className="flex">
                        <div className='font-semibold'>Trendyol Milla </div>
                        <span className="mx-5"> Kazak</span>
                      </div>
                      <div className="flex justify-start items-center ">
                        <button onClick={decrementIndex} className='bg-gray-200 p-2 rounded-sm border'>-</button>
                        <span className=' p-2 rounded-sm border'>{productIndex}</span>
                        <button onClick={incrementIndex} className='bg-gray-200 p-2 rounded-sm border'>+</button>
                      </div>
                      <div className="font-bold text-lg  text-primaryColor ">{200 * productIndex}TL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 mx-5 flex flex-col justify-between text-start mt-2">
          <div className="border rounded-lg p-5 flex flex-col justify-between">
            <div className="text-xl my-4">Sipariş Özeti</div>
            <div className="flex justify-between"><span>Ürünün Toplamı </span><span>200 TL</span></div>
            <div className="flex justify-between"><span>Kargo Toplam </span><span>19,99 TL</span></div>
            <hr className='my-2' />
            <div className="flex justify-between"><span>Toplam </span><span>219,99 TL</span></div>
            <button className='w-full py-3 my-3 rounded-md bg-primaryColor text-white font-bold text-lg' onClick={paymentPagePush}>Sepeti Onayla</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasketPage