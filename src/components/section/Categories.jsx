import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../reducers/categoriesReducer'
import CategoryCard from '../common/CategoryCard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
const Categories = () => {
  const [isOpen, setisOpen] = useState(false)

  const dispatch = useDispatch()
  const { categories } = useSelector((state) => state.categories)
  console.log(categories)
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  return (
    <Link to="/category">
      <div className=" flex flex-col items-center ">
        <div className="container max-w-[1220px] ">
          <div
            className="flex  justify-start flex-wrap relative"
            onMouseLeave={() => setisOpen(false)}
            onMouseEnter={() => setisOpen(true)}
          >
            {categories &&
              categories.map((categorie, key) => {
                return (
                  <div className="flex flex-wrap" key={key}>
                    <CategoryCard categorie={categorie} />
                  </div>
                )
              })}
            {isOpen && (
              <ul className="absolute top-full text-gray-700 pt-1  w-[1200px] h-[350px]  bg-red-400">
                <li className="">
                  <a
                    className="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    href="/"
                  >
                    One
                  </a>
                </li>
              </ul>
            )}
          </div>
          <div className="flex justify-between mx-2 mt-20 mb-5">
            <a href="">
              <img
                src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/SepeteEnCOkEklenenler_202206291435.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/EnCOkONeCIkanlar_202206291435.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/FlasINdirimler_202206291435.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Categories
