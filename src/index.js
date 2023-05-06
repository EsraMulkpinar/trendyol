import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/store';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header/>
    <App />
    <Footer/>
  </Provider>
);