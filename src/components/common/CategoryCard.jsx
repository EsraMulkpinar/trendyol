import React from 'react'
const CategoryCard = ({ categorie }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-start">
        <div className="group inline-block">
          <button className="text-gray-700 font-semibold rounded inline-flex items-center  mx-4">
            <div className="font-semibold text-sm hover:text-orange-600 hover:underline hover:underline-offset-4 hover:decoration-[3px] ">
              {categorie.name}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
