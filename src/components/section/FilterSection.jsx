import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterProducts } from '../../reducers/productsReducer';

const Filter = () => {
    const dispatch = useDispatch();
    const filterProducts = useSelector((state) => state.products.filterProducts);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    const [filterName, setFilterName] = useState('');

    useEffect(() => {
        dispatch(getFilterProducts(filterName));
    }, [dispatch, filterName]);


    const handleInputChange = (e) => {
        setFilterName(e.target.value);
    };

    const handleFilterClick = () => {
        dispatch(getFilterProducts(filterName));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <div className="relative">
            <input
                type="text"
                value={filterName}
                onChange={handleInputChange}
                className="w-[598px] px-3 py-2 bg-secondaryColor border-2 border-grayColor focus-visible:outline-primaryColor"
                placeholder="Aradığınız ürün, kategori veya markayı yazınız"
            />
            {filterProducts.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
            <button onClick={handleFilterClick} className="absolute top-3 right-2 rounded-md z-10">
                <BiSearchAlt2 size={25} className="fill-primaryColor" />
            </button>
        </div>
    )
}

export default Filter