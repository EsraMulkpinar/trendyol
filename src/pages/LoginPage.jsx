import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/authReducer';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const error = useSelector((state) => state.auth.error);

  const handleLogin = async (values) => {
    try {
      await dispatch(login(values));
      if (loginStatus === 'succeseded') {
        history.push('/');
        console.log(values);
      }
    } catch (error) {
      console.log('Kullanıcı doğrulama hatası:', error);
    }
  };

  return (
    <div className="text-start flex flex-col items-center justify-center my-20 bg-gray-100">
      <div className='text-2xl'>Merhaba,</div>
      <div className='mb-4'>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</div>
      <div className="bg-white shadow-md border border-borderColor rounded-md px-8 pt-6 pb-8 w-1/3">
        <h2 className="text-2xl font-bold mb-4">Giriş Yap</h2>
        {loginStatus === 'loading' && <div>Giriş yapılıyor...</div>}
      {loginStatus === 'succeseded' && <div>Giriş başarılı!</div>}
      {loginStatus === 'failed' && <div>Giriş başarısız. Hata: {error}</div>}
     
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={(values) => {
            const errors = {};
            // İstediğiniz doğrulama mantığını buraya ekleyebilirsiniz
            if (!values.email) {
              errors.email = 'Email alanı boş bırakılamaz';
            }
            if (!values.password) {
              errors.password = 'Şifre alanı boş bırakılamaz';
            }
            return errors;
          }}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Field
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Şifre
              </label>
              <Field
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-primaryColor hover:bg-hoverButton text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Giriş Yap
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-primaryColor hover:text-hoverButton"
                href="/forgot-password"
              >
                Şifremi Unuttum
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default LoginPage