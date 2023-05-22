import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getFilterProducts } from "../reducers/productsReducer";

const Products = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { filterProducts } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getFilterProducts(location.state?.name || ""));
  }, [dispatch, location]);

  return (
    <div>
      {filterProducts?.map((product, index) => (
        <div key={index}>{product.name}</div>
      ))}
    </div>
  );
};

export default Products;
