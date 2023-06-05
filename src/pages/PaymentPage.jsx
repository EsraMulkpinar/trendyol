import { Formik } from 'formik';
import React from 'react'
import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { useDispatch } from 'react-redux';
import { checkout } from '../reducers/basketReducer';
import { toast } from 'react-toastify';

const PaymentPage = () => {
  const dispatch = useDispatch()
  const [currentFocusedInput, setcurrentFocusedInput] = useState("")

  const handleInputFocus = (e) => {
    setcurrentFocusedInput(e.target.name)
  }
  return (
    <Formik onSubmit={(values) => dispatch(checkout({ cvv: values.cvc, card_number: values.number, month: values.expiry.split("/")[0], year: values.expiry.split("/")[1] }))} initialValues={{ cvc: "", expiry: "", name: "", number: "" }}>
      {
        formik => (
          <form onSubmit={formik.handleSubmit} className='flex items-center max-w-[1220px] mx-auto gap-y-4 py-4 gap-x-4'>
            <Cards cvc={formik.values.cvc} expiry={formik.values.expiry} name={formik.values.name} number={formik.values.number} focused={currentFocusedInput} />
            <div className='flex flex-col items-start w-full'>
              <div className='flex flex-col'>
                <label>Ad Soyad:</label>
                <input className='col-span -1 border border-gray-400 py-0.5 px-2 rounded-md' type="text" onFocus={handleInputFocus} {...formik.getFieldProps("name")} />
              </div>

              <div className='flex flex-col'>
                <label>Kart Numarası:</label>
                <input className='col-span-1 border border-gray-400 py-0.5 px-2 rounded-md' onFocus={handleInputFocus} type="tel" {...formik.getFieldProps("number")} />
              </div>

              <div className='flex flex-col'>
                <label>Ay/Yıl:</label>
                <input className='col-span-1 border border-gray-400 py-0.5 px-2 rounded-md' type="text" onFocus={handleInputFocus} {...formik.getFieldProps("expiry")} />
              </div>
              <div className='flex flex-col'>
                <label>CVC:</label>
                <input className='col-span-1 border border-gray-400 py-0.5 px-2 rounded-md' type="text" onFocus={handleInputFocus} {...formik.getFieldProps("cvc")} />
              </div>
              <button type='submit' className='w-full py-3 my-3 rounded-md bg-primaryColor text-white font-bold text-lg'>Ödemeyi Yap</button>
            </div>

          </form>
        )
      }
    </Formik>
  )
}

export default PaymentPage