import React from 'react'
import Categories from '../components/section/Categories'
import Merchants from '../components/section/Merchants'
import Header from '../components/layout/header/header'
import Footer from '../components/layout/footer/footer'

const HomePage = () => {
  return (
    <div>
      <Categories />
      <Merchants />
    </div>
  )
}

export default HomePage
