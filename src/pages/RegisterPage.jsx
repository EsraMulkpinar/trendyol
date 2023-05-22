import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../reducers/authReducer'
import { Formik } from 'formik'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const { registerUser } = useSelector((state) => state.auth)
  const history = useHistory()
  // useEffect(() => {
  // dispatch(register())
  //   }, [dispatch])
  return (
    <Formik initialValues={{
      full_name:"",
      email:"",
      password:""
    }}
    onSubmit={(values) => dispatch(register(values)).unwrap().then(() => history.push("/login"))}
    >
      {
        (formik) => (
          <div className="text-start flex flex-col items-center justify-center my-20 bg-gray-100">
            <div className='text-2xl'>Merhaba,</div>
            <div className='mb-4'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</div>
            <div className="bg-white shadow-md border border-borderColor rounded-md px-8 pt-6 pb-8 w-1/3">
              <h2 className="text-2xl font-bold mb-4">Kayıt Ol</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Ad Soyad
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    {...formik.getFieldProps("full_name")}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    {...formik.getFieldProps("email")}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Şifre
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    {...formik.getFieldProps("password")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-primaryColor hover:bg-hoverButton text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Kayıt Ol
                  </button>
                  <a
                    className="inline-block align-baseline font-bold text-sm text-primaryColor hover:text-hoverButton"
                    href="/"
                  >
                    Şifremi Unuttum
                  </a>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </Formik>
  )
}

export default RegisterPage