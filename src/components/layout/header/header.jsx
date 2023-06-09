import React, { useEffect, useState } from "react";
import CategoryCard from "../../common/CategoryCard";
import { getCategories } from "../../../reducers/categoriesReducer";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../../section/FilterSection";
import LoginSection from "../../section/LoginSection";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [openedIndex, setopenedIndex] = useState(null);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const history = useHistory();

  const favoritesPagePush = () => {
    history.push("/favorites")
  }
  const basketPagePush = () => {
    history.push("/basket")
  }

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
        <button className="flex items-center space-x-1 group cursor-grabbing">
          <MdFavoriteBorder className="group-hover:fill-primaryColor" />
          <div onClick={favoritesPagePush} className="text-sm group-hover:text-primaryColor">Favorilerim</div>
        </button>
        <button className="flex items-center space-x-1 group cursor-grabbing">
          <SlBasket className="group-hover:fill-primaryColor" />
          <div onClick={basketPagePush} className="text-sm group-hover:text-primaryColor">Sepetim</div>
        </button>
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
