import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Filter = () => {
  const dispatch = useDispatch();
  const { products, filterProducts } = useSelector((state) => state.products);
  const [filterName, setFilterName] = useState("");
  const history = useHistory();

  const handleInputChange = (e) => {
    setFilterName(e.target.value);
  };

  const handleFilterClick = () =>
    filterName.length > 2 &&
    history.push({
      pathname: "/products",
      state: {
        name: filterName,
      },
    });

  return (
    <div className="relative">
      <input
        type="text"
        value={filterName}
        onChange={handleInputChange}
        className="w-[598px] px-3 py-2 bg-secondaryColor border-2 border-grayColor focus-visible:outline-primaryColor"
        placeholder="Aradığınız ürün, kategori veya markayı yazınız"
      />
      <button
        onClick={handleFilterClick}
        className="absolute top-3 right-2 rounded-md z-10"
      >
        <BiSearchAlt2 size={25} className="fill-primaryColor" />
      </button>
    </div>
  );
};

export default Filter;
