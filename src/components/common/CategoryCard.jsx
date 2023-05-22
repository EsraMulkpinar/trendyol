import React from 'react'
const CategoryCard = ({ categorie, isOpen }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-start">
        <div className="group inline-block">
          <button className="text-gray-700 font-semibold rounded inline-flex items-center  mx-4">
            <div className="font-semibold text-[13px] hover:text-orange-600 hover:underline hover:underline-offset-4 hover:decoration-[3px] uppercase">
              {categorie.name}
            </div>
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="absolute left-0 top-full text-gray-700 pt-1  w-[1200px] h-[350px]  rounded-lg  bg-white z-10 border shadow-md shadow-shadowColor inset-5">
          {
            categorie.sub_categories.map((sub_category,index) => <li className="">
              <a key={index}
                className="rounded-t hover:text-primaryColor hover:underline py-2 px-4 block whitespace-no-wrap"
                href="/"
              >
                {sub_category.name}
              </a>
            </li>)
          }
        </ul>
      )}
    </div>
  )
}

export default CategoryCard
