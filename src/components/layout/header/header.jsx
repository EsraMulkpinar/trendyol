import React, { useEffect, useState } from "react";
import CategoryCard from "../../common/CategoryCard";
import { getCategories } from "../../../reducers/categoriesReducer";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../../section/FilterSection";
import LoginSection from "../../section/LoginSection";

const Header = () => {
  const [openedIndex, setopenedIndex] = useState(null);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mt-7">
        <a href="/" className="">
          <img
            className="w-[146px]"
            src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
            alt=""
          />
        </a>
        <FilterSection />
        <LoginSection />
      </div>
      <div className="flex  justify-start flex-wrap relative">
        {categories &&
          categories.map((categorie, index) => {
            return (
              <div
                key={index}
                onMouseLeave={() => setopenedIndex(null)}
                onMouseEnter={() => setopenedIndex(index)}
                className="flex flex-wrap border-b  "
              >
                <CategoryCard
                  categorie={categorie}
                  isOpen={openedIndex === index}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Header;
