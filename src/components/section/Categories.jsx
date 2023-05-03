import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../reducers/categoriesReducer'
import CategoryCard from '../common/CategoryCard'

const Categories = () => {
   
  const dispatch = useDispatch()
  const {categories} = useSelector((state) => state.categories)
  console.log(categories);
  useEffect(() => {
   dispatch(getCategories())
  },[dispatch]) 


  return (
    <div className=" flex flex-col items-center ">
      <div className="container max-w-[1220px] ">
      <div className='flex  justify-start flex-wrap'>
      {categories?categories.map((categorie,key) => {
        return (
         <div className="flex flex-wrap"  key={key}>
           <CategoryCard categorie={categorie}/>
         </div>
        )
      }):null}
    </div>
    <div className="flex justify-between mx-2 mt-20 mb-5">
      <a href="">
      <img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/SepeteEnCOkEklenenler_202206291435.png" alt="" />
      </a>
      <a href="">
      <img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/EnCOkONeCIkanlar_202206291435.png" alt="" />
      </a>
      <a href="">
      <img src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2022/6/29/FlasINdirimler_202206291435.png" alt="" />
      </a>
      </div>
    </div>
    </div>
  )
}

export default Categories